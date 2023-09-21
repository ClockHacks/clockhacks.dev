const Contact = () => {
    return (
        <section className='flex flex-col items-center justify-center w-full mb-[7rem]' id="contact">
            <h1 className='md:text-6xl text-4xl text-accent1 font-bold'>Contact Us</h1>
            <p className='text-lg mt-5 text-center'>Interested in sponsoring? <a href="mailto:business@clockhacks.dev">Reach out to our  <span className="text-accent1 hover:underline">business email.</span></a></p>
            <p className='text-lg mt-2 text-center'>Have questions? <a href="mailto:hi@clockhacks.dev">Send us an email <span className="text-accent1 hover:underline">here.</span></a></p>
        </section>
    );
}

export default Contact;