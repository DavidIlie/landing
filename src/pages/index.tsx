const Home = (): JSX.Element => {
    const links = ["https://davidilie.com", "https://davidapps.dev"];

    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <h1 className="text-gradient lg:text-6xl sm:text-5xl text-4xl font-semibold">
                David Ilie Apps Platform
            </h1>
            <div className="flex gap-4 mt-1">
                {links.map((link, index) => (
                    <a
                        href={link}
                        target="_blank"
                        key={index}
                        className="text-blue-400 hover:text-blue-500 duration-150"
                    >
                        {link}
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Home;
