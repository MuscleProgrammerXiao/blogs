"use server";
import prisma from "@/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async  function createPost(formData:FormData) {
    /* 每次发起请求时，都进行验证是否授权 */
    const {isAuthenticated} = getKindeServerSession();
    if(!(await isAuthenticated())){
        redirect("/api/auth/login");
    }

  const title = formData.get("title") as string;
  const body = formData.get("body") as string;

  await prisma.post.create({
    data:{
        title,
        body
    }
  })

  revalidatePath("/posts")//访问该路由的时候刷新缓存
}
