import { LoaderFunctionArgs } from "react-router";
import supabase from "../../utils/supabase";

export const fetchPosts = async () => {
  try {
    const { data: posts } = await supabase.from("posts").select(`
    *,
    profiles (
      id, 
      username,
      avatar_url
    )
  `);

    return posts;
  } catch (e) {
    console.error(e);
  }
};

export const fetchPostDetail = async ({ params }: LoaderFunctionArgs) => {
  try {
    const { data: posts } = await supabase
      .from("posts")
      .select(
        `
    *,
    profiles (
      id, 
      username,
      avatar_url
    ),
    comments (
      id, 
      comment, 
      profile_id,
      created_at,
      post_id,
      profiles (
        id, 
        username,
        avatar_url
      )
    )
  `
      )
      .eq("id", Number(params.id)) // parmas의 id와 동적 세그먼트의 id 값이 동일한 것의 게시글 정보 하나만 불러올 수 있음
      .single();

    return posts;
  } catch (e) {
    console.error(e);
  }
};
