import PageLayout from "@/components/layout/PageLayout";
import Button from "@/components/ui/Button";

const ContactPage = () => {
    return (
        <PageLayout>
            <header className="pt-16 pb-8 px-6 sm:px-12 lg:px-24 text-center">
                <div className="max-w-4xl mx-auto flex flex-col items-center">
                    <div className="w-[1px] bg-gradient-to-b from-transparent via-sage to-transparent h-24 mb-12" />
                    <p className="text-[10px] uppercase tracking-[0.5em] text-sage font-bold mb-8">
                        Get in Touch
                    </p>
                    <h1 className="text-6xl md:text-7xl font-display text-forest leading-tight mb-12 serif-title">
                        Connect with the <span className="italic font-normal">Legacy</span>
                    </h1>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 pb-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                    <div className="space-y-16 py-8">
                        <div className="space-y-12">
                            <div className="space-y-4">
                                <h2 className="text-2xl font-display italic text-forest serif-title">
                                    The Garden Address
                                </h2>
                                <p className="text-base text-forest/70 font-light leading-relaxed">
                                    1218/1, Shivajinagar,
                                    <br />
                                    Fergusson College Road, Pune - 411 004,
                                    <br />
                                    Maharashtra, India.
                                </p>
                            </div>
                            <div className="space-y-4">
                                <h2 className="text-2xl font-display italic text-forest serif-title">
                                    General Inquiries
                                </h2>
                                <p className="text-base text-forest/70 font-light leading-relaxed">
                                    Phone: +91 20 2553 1244
                                    <br />
                                    Office: +91 20 2567 2930
                                </p>
                            </div>
                            <div className="space-y-4">
                                <h2 className="text-2xl font-display italic text-forest serif-title">
                                    Digital Presence
                                </h2>
                                <p className="text-base text-forest/70 font-light leading-relaxed">
                                    Email: info@vaishalihotel.in
                                    <br />
                                    Website: www.vaishalihotel.in
                                </p>
                            </div>
                        </div>

                        <div className="h-[350px] w-full overflow-hidden rounded-sm grayscale hover:grayscale-0 transition-all duration-1000 border border-sage/20 shadow-lg shadow-forest/5">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.248512396384!2d73.84478177607548!3d18.517676769263632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c0792d473491%3A0x7733eb7ba3049408!2sVaishali%20Restaurant!5e0!3m2!1sen!2sin!4v1710340000000!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0, filter: "sepia(20%) hue-rotate(40deg) saturate(60%) contrast(90%)" }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>

                    <div className="bg-white border border-sage/10 p-8 md:p-16 rounded-sm shadow-2xl shadow-forest/5">
                        <div className="mb-16">
                            <span className="text-[10px] uppercase tracking-[0.4em] text-sage font-bold mb-4 block">
                                Send a Message
                            </span>
                            <p className="text-sm text-forest/50 font-light">
                                Share your thoughts or inquiries with our heritage team.
                            </p>
                        </div>
                        <form className="space-y-12">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                <div className="flex flex-col space-y-2 group">
                                    <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-forest/40 group-focus-within:text-forest transition-colors">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Your name"
                                        className="w-full text-forest py-2 bg-transparent border-0 border-b border-sage/30 focus:border-forest focus:ring-0 placeholder:text-forest/20 font-light transition-all outline-none"
                                    />
                                </div>
                                <div className="flex flex-col space-y-2 group">
                                    <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-forest/40 group-focus-within:text-forest transition-colors">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="email@example.com"
                                        className="w-full text-forest py-2 bg-transparent border-0 border-b border-sage/30 focus:border-forest focus:ring-0 placeholder:text-forest/20 font-light transition-all outline-none"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col space-y-2 group">
                                <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-forest/40 group-focus-within:text-forest transition-colors">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    placeholder="What are you reaching out about?"
                                    className="w-full text-forest py-2 bg-transparent border-0 border-b border-sage/30 focus:border-forest focus:ring-0 placeholder:text-forest/20 font-light transition-all outline-none"
                                />
                            </div>
                            <div className="flex flex-col space-y-2 group">
                                <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-forest/40 group-focus-within:text-forest transition-colors">
                                    Message
                                </label>
                                <textarea
                                    placeholder="Your message here..."
                                    rows={4}
                                    className="w-full text-forest py-2 bg-transparent border-0 border-b border-sage/30 focus:border-forest focus:ring-0 placeholder:text-forest/20 font-light transition-all outline-none resize-none"
                                ></textarea>
                            </div>
                            <Button size="xl" className="w-full mt-8">
                                Send Message
                            </Button>
                        </form>
                    </div>
                </div>

                {/* Operating Hours */}
                <div className="mt-24 pt-24 border-t border-sage/10 flex flex-col items-center">
                    <div className="max-w-3xl w-full bg-white border border-sage/10 p-8 md:p-16 rounded-sm relative overflow-hidden shadow-xl shadow-forest/5">
                        <div className="absolute top-0 right-0 p-8 opacity-10">
                            <span className="material-symbols-outlined text-6xl text-forest">
                                schedule
                            </span>
                        </div>
                        <div className="text-center space-y-12">
                            <span className="text-[10px] uppercase tracking-[0.5em] text-sage font-bold">
                                Operating Hours
                            </span>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                                <div className="space-y-4">
                                    <h3 className="font-display italic text-xl text-forest serif-title">
                                        Daily Service
                                    </h3>
                                    <p className="text-sm text-forest/60 font-light">
                                        7:00 AM — 11:00 PM
                                    </p>
                                </div>
                                <div className="space-y-4">
                                    <h3 className="font-display italic text-xl text-forest serif-title">
                                        Breakfast
                                    </h3>
                                    <p className="text-sm text-forest/60 font-light">
                                        7:00 AM — 11:30 AM
                                    </p>
                                </div>
                                <div className="space-y-4">
                                    <h3 className="font-display italic text-xl text-forest serif-title">
                                        Dinner
                                    </h3>
                                    <p className="text-sm text-forest/60 font-light">
                                        7:00 PM — 11:00 PM
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </PageLayout>
    );
};

export default ContactPage;
