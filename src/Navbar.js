const Navbar = () => {
    return (
        <nav className="navbar">
            <h2>BLOG</h2>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create" style = {{ 
                    color: "White",
                    backgroundColor: "#f1356d",
                    borderRadius: "6px"
                 }} >New Blog</a>
            </div>
        </nav>
    );
}
 
export default Navbar;