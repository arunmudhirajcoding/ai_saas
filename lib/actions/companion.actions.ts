"use server";

import { auth } from "@clerk/nextjs/server";
import { createSupabaseClient } from "@/lib/supabase";

//creating companion 
export const createCompanion = async (formData: CreateCompanion) => {
	const { userId: author } = await auth();//extracted userid from the clerk and named as author 
	const supabase = createSupabaseClient();//for the data from the supabase 

	//extracting data and error 
	const { data, error } = await supabase
		.from("companions")
		.insert({ ...formData, author })
		.select();

	if (error || !data)
		throw new Error(error?.message || "Failed to create a companion");

	return data[0];
};

export const getAllCompanions = async ({
	limit = 10,
	page = 1,
	subject,
	topic,
}: GetAllCompanions) => {
	const supabase = createSupabaseClient();

	let query = supabase.from("companions").select();

	// this code is used to filter the companions based on the subject and topic
	// it uses the ilike operator to perform a case-insensitive search
	// the % is a wildcard character that matches any characters before or after the search term
	// the or operator is used to combine multiple conditions
	// if both subject and topic are provided, it will search for companions that have the subject
	// and either the topic or name that contains the topic
	// if only subject is provided, it will search for companions that have the subject
	// if only topic is provided, it will search for companions that have the topic or name that contains the topic

	query = query.range((page - 1) * limit, page * limit - 1);

	const { data: companions, error } = await query;

	if (error) throw new Error(error.message);

	return companions;
};

export const getCompanion = async (id: string) => {
	const supabase = createSupabaseClient();

	const { data, error } = await supabase
		.from("companions")
		.select()
		.eq("id", id);

	if (error) return console.log(error);

	return data[0];
};

//interaction session with corresponding companion and user
export const addToSessionHistory = async (companionId: string) => {
	const { userId } = await auth();
	const supabase = createSupabaseClient();
	const { data, error } = await supabase.from("session_history").insert({
		companion_id: companionId,
		user_id: userId,
	});

	if (error) throw new Error(error.message);

	return data;
};

//reecent sessions
export const getRecentSessions = async (limit = 10) => {
	const supabase = createSupabaseClient();
	const { data, error } = await supabase
		.from("session_history")
		.select(`companions:companion_id (*)`)
		.order("created_at", { ascending: false })
		.limit(limit);

	if (error) throw new Error(error.message);

	return data.map(({ companions }) => companions);
};

export const getUserSessions = async (userId: string, limit = 10) => {
	const supabase = createSupabaseClient();
	const { data, error } = await supabase
		.from("session_history")
		.select(`companions:companion_id (*)`)
		.eq("user_id", userId)
		.order("created_at", { ascending: false })
		.limit(limit);

	if (error) throw new Error(error.message);

	return data.map(({ companions }) => companions);
};

export const getUserCompanions = async (userId: string) => {
	const supabase = createSupabaseClient();
	const { data, error } = await supabase
		.from("companions")
		.select()
		.eq("author", userId);

	if (error) throw new Error(error.message);

	return data;
};


//subscription companion permissions limits
export const newCompanionPermissions = async () => {
	const { userId, has } = await auth();
	const supabase = createSupabaseClient();

	let limit = 0;

	//set the limit
	if (has({ plan: "pro" })) {
		return true;
	} else if (has({ feature: "3_companion_limit" })) {
		limit = 3;
	} else if (has({ feature: "10_companion_limit" })) {
		limit = 10;
	}

	const { data, error } = await supabase
		.from("companions")
		.select("id", { count: "exact" })
		.eq("author", userId);

	if (error) throw new Error(error.message);

	const companionCount = data?.length;//counting how many companions are there 

	if (companionCount >= limit) {//limit exceed then blocking 
		return false;
	} else {
		return true;
	}
};

// Bookmarks --> todo: 
// export const addBookmark = async (companionId: string, path: string) => {
// 	const { userId } = await auth();
// 	if (!userId) return;
// 	const supabase = createSupabaseClient();
// 	const { data, error } = await supabase.from("bookmarks").insert({
// 		companion_id: companionId,
// 		user_id: userId,
// 	});
// 	if (error) {
// 		throw new Error(error.message);
// 	}
// 	// Revalidate the path to force a re-render of the page

// 	revalidatePath(path);
// 	return data;
// };

// export const removeBookmark = async (companionId: string, path: string) => {
// 	const { userId } = await auth();
// 	if (!userId) return;
// 	const supabase = createSupabaseClient();
// 	const { data, error } = await supabase
// 		.from("bookmarks")
// 		.delete()
// 		.eq("companion_id", companionId)
// 		.eq("user_id", userId);
// 	if (error) {
// 		throw new Error(error.message);
// 	}
// 	revalidatePath(path);
// 	return data;
// };

// // It's almost the same as getUserCompanions, but it's for the bookmarked companions
// export const getBookmarkedCompanions = async (userId: string) => {
// 	const supabase = createSupabaseClient();
// 	const { data, error } = await supabase
// 		.from("bookmarks")
// 		.select(`companions:companion_id (*)`) // Notice the (*) to get all the companion data
// 		.eq("user_id", userId);
// 	if (error) {
// 		throw new Error(error.message);
// 	}
// 	// We don't need the bookmarks data, so we return only the companions
// 	return data.map(({ companions }) => companions);
// };
