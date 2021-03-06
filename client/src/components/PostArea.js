import Blogs from "./Blogs";
import Header from "./Header";

function PostArea({ currentUser, posts, handleLogout }) {
    return (
        <>
            <Header currentUser={currentUser} handleLogout={handleLogout} />
            <div>
                {posts.map(post => (
                    <Blogs key={post.id} post={post} />
                ))}
            </div>
        </>
    );
}

export default PostArea;
