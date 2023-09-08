import { Link } from "react-router-dom";

const BlogList = ({blogs, title}) => {
    // const handleDelete = () =>{
    //     console.log(blogs)
    //     fetch(`http://localhost:8000/blogs${}`,{
    //         method: 'DELETE'
    //     })
    // }
    return (
        <div className="blog-list">
            <h1>{title}</h1>
                {blogs.map((blog) =>(
            <div className="blog-preview" key={blog.id}>
                <Link to= {`/blogs/${blog.id}`}>
                    <h2>{blog.title}</h2>
                    <p>Written by: {blog.author}</p>
                </Link>  
                {/* <button onClick={handleDelete}>X</button> */}
              </div> 
              ))} 
        </div>
        
        
        
      );
}
 
export default BlogList;