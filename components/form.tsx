import { createPost } from "@/actions/actions";
export default function Form() {
    return (
        <form
            action={createPost}
            className="flex flex-col max-w-[400px] mx-auto space-x-2 gap-2 my-10"
        >
            <input
                name="title"
                type='text'
                placeholder="Title for new post"
                className="border rounded px-3 h-10"
                required
            />
            <textarea
                name="body"
                placeholder="Body content for new post"
                className="border rounded px-3 py-2"
                rows={6}
                required
            />
            <button className="h-10 bg-blue-500 px-5 rounded text-white">Submit</button>
        </form>
    )
}
