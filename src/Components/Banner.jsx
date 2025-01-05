
export default function Banner() {
    return (
        <div className="bg-cover bg-no-repeat rounded-3xl mid:w-full h-full md:h-[35.5rem] mb-10" style={{
            backgroundImage: 'url(https://i.ibb.co.com/yqPfxSb/chefs-cover.jpg)',
        }}>
            <div className="w-9/12 mx-auto flex flex-col justify-center items-center text-center h-full space-y-6 py-4">
                <h1 className="font-bold text-white md:text-[3.25rem]">
                    Discover an exceptional cooking class tailored for you!
                </h1>
                <p className="text-lg text-white font-normal">

                    Unlock your culinary potential with a cooking class designed to match your tastes and skill level. Whether you`&apos;`re a beginner eager to learn the basics or an experienced cook looking to master new techniques, this personalized experience ensures you`&apos;`ll create delicious dishes with confidence. Join now and transform your kitchen into a hub of creativity and flavor!
                </p>
                <div className="flex gap-4 text-xl font-semibold">
                    <button className="btn bg-green-400 rounded-full border-none">
                        Explore now
                    </button>
                    <button className="btn btn-outline text-white hover:bg-green-400 rounded-full border-none">
                        Our Feedback
                    </button>
                </div>
            </div>
        </div>
    )
}
