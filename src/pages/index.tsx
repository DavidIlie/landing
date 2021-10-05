import { Fade } from "react-awesome-reveal";

const Home = (): JSX.Element => {
    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <Fade direction="up" triggerOnce cascade>
                <h1 className="text-gradient lg:text-6xl sm:text-5xl text-4xl font-semibold">
                    David Ilie Apps Platform
                </h1>
                <div className="flex gap-4 mt-2">
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
            </Fade>
            <div className="bottom-0 fixed px-5 py-5 w-full flex justify-center items-center text-xl">
                <div>
                    <a
                        href="/privacy-policy.html"
                        className="text-blue-500 hover:text-blue-600 duration-150"
                    >
                        Privacy Policy
                    </a>
                    {" - "}
                    <a
                        href="/terms-of-service.html"
                        className="text-blue-500 hover:text-blue-600 duration-150"
                    >
                        Terms of service
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Home;
