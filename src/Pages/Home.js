import BlogList from '../components/BlogList';
import CategoryNav from '../components/CategoryNav';

const Home = () => {
    return ( 
        <div className="w-full px-5 pt-5 sm:w-[95%] md:w-[85%] lg:w-[63%] lg:px-10 mx-auto lg:pt-10 lg:border-x border-[#f2f2f2]">
            <CategoryNav />
            <BlogList />
            
        </div>
     );
}
 
export default Home;