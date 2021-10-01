const Home = (): JSX.Element => {
    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <h1 className="text-gradient lg:text-6xl sm:text-5xl text-4xl font-semibold">
                David Ilie Apps Platform
            </h1>
            <div className="flex gap-4 mt-1">
                <h1 className="text-xl text-gray-400">
                    A project by{" "}
                    <a
                        href="https://davidilie.com"
                        target="_blank"
                        className="text-blue-400 hover:text-blue-500 duration-150"
                    >
                        David Ilie
                    </a>
                </h1>
            </div>
        </div>
    );
};

export default Home;
