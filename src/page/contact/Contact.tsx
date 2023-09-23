function Contact() {
  return (
    <div>
      <div className="p-[10px]">
        <iframe
          className="w-full h-[500px]"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d244.89940621069618!2d106.62733181350781!3d10.857874608648986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752b12a68a5f37%3A0xa6a1162f251bd3fa!2zMTEzIMSQw7RuZyBC4bqvYywgVMOibiBIxrBuZyBUaHXhuq1uLCBRdeG6rW4gMTIsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCA3MTUwNiwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1695487076965!5m2!1svi!2s"
        ></iframe>
      </div>
      <div className="mt-[50px]">
        <div className=" container w-full h-fit m-auto flex flex-col justify-center items-center">
          <h3 className="mb-[20px] border-none tracking-widest text-[20px] font-bold">
            GET IN TOUCH
          </h3>
          <p className="text-[12px] text-center font-semibold mb-[50px]">
            Nulla mattis mi quis elit porttitor gravida. Ut ut laoreet justo.
            <br />
            Suspendisse nulla ligula, aliquet sed cursus ut, sodales sit amet
            metus.
          </p>
          <div className="\">
            <div className="pb-[70px]">
              <form className="contact-form flex flex-col items-center uppercase">
                <label className="text-center text-[11px] mb-[10px] font-medium ">
                  Your name*
                </label>
                <input
                  className=" w-[570px] h-[42px] px-[25px] mb-[20px] border border-[#a3a3a3] rounded-3xl "
                  type="text"
                />
                <label className="text-center text-[11px] mb-[10px] font-medium ">
                  Your email*
                </label>
                <input
                  className="w-[570px] h-[42px] px-[25px] mb-[20px] border border-[#a3a3a3] rounded-3xl"
                  type="email"
                />
                <label className="text-center text-[11px] mb-[10px] font-medium ">
                  Your message*
                </label>
                <textarea className="w-[570px] h-[150px] p-[25px] mb-[20px] border border-[#a3a3a3] rounded-3xl"></textarea>
                <button
                  className="uppercase w-fit border py-[10px] px-[40px] rounded-3xl text-[white] bg-[#cc797f] hover:text-[#cc797f] hover:bg-[white]"
                  type="submit"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
