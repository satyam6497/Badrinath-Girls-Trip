import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  MapPin, Calendar, Clock, Banknote, CheckCircle2, XCircle,
  Music, VolumeX, Star, Shield, Backpack, ChevronDown,
  Train, Car, Sunrise, Droplets, Mountain, Heart, Phone, Mail,
  Instagram, Facebook, Twitter, Flame, TreePine, Waves
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

function FadeInSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      variants={stagger}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function FadeItem({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div variants={fadeUp} className={className}>
      {children}
    </motion.div>
  );
}

const highlights = [
  {
    name: "Har Ki Pauri Ganga Aarti",
    desc: "Witness the most sacred evening aarti ceremony — a river of fire and devotion that will move you to tears.",
    img: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=600&q=80",
    icon: <Flame className="w-5 h-5" />,
    color: "from-orange-300/40 to-amber-200/40",
  },
  {
    name: "Devprayag Sangam",
    desc: "Where the turquoise Alaknanda meets the jade Bhagirathi to form the holy Ganga. A sight that stops time.",
    img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=600&q=80",
    icon: <Waves className="w-5 h-5" />,
    color: "from-blue-300/40 to-cyan-200/40",
  },
  {
    name: "Joshimath",
    desc: "The gateway to Badrinath — perched at 6,000 ft with panoramic Himalayan views that steal your breath.",
    img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80",
    icon: <Mountain className="w-5 h-5" />,
    color: "from-green-300/40 to-emerald-200/40",
  },
  {
    name: "Badrinath Temple",
    desc: "One of the Char Dham — the ancient vishnu shrine standing majestically against snow-capped Himalayan peaks.",
    img: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&w=600&q=80",
    icon: <Star className="w-5 h-5" />,
    color: "from-purple-300/40 to-lavender-200/40",
  },
  {
    name: "Mana Village",
    desc: "The last Indian village before the Tibet border. Mythological caves, ancient bridges, and untouched beauty.",
    img: "https://images.unsplash.com/photo-1512036666432-2181c1f26420?auto=format&fit=crop&w=600&q=80",
    icon: <TreePine className="w-5 h-5" />,
    color: "from-teal-300/40 to-green-200/40",
  },
  {
    name: "Tapt Kund",
    desc: "Sacred hot springs flowing year-round at Badrinath. The divine waters warm body and soul alike.",
    img: "https://images.unsplash.com/photo-1559494007-9f5847c49d94?auto=format&fit=crop&w=600&q=80",
    icon: <Droplets className="w-5 h-5" />,
    color: "from-pink-300/40 to-rose-200/40",
  },
];

const itinerary = [
  {
    day: "Day 1",
    date: "16 May 2026 (Friday)",
    title: "Delhi to Haridwar — Sacred Beginnings",
    color: "from-violet-400 to-purple-500",
    steps: [
      { time: "05:00 AM", icon: <Train className="w-4 h-4" />, text: "Board the train from New Delhi Railway Station. Settle in, chai in hand, and let the adventure begin." },
      { time: "10:30 AM", icon: <MapPin className="w-4 h-4" />, text: "Arrive Haridwar — check in to hotel, freshen up and have a warm breakfast." },
      { time: "01:00 PM", icon: <Waves className="w-4 h-4" />, text: "Explore Haridwar: Mansa Devi Temple by cable car, Chandi Devi, Har Ki Pauri for a serene afternoon dip." },
      { time: "06:00 PM", icon: <Flame className="w-4 h-4" />, text: "The sacred Ganga Aarti at Har Ki Pauri — an unmissable spiritual spectacle of lamps, chants, and river mist." },
      { time: "08:30 PM", icon: <Car className="w-4 h-4" />, text: "Dinner. Optional stroll through Haridwar's lit-up ghats. Early night to prepare for the mountain drive ahead." },
    ],
  },
  {
    day: "Day 2",
    date: "17 May 2026 (Saturday)",
    title: "Into the Mountains — Badrinath Dham",
    color: "from-pink-400 to-rose-500",
    steps: [
      { time: "05:00 AM", icon: <Sunrise className="w-4 h-4" />, text: "Wake up to misty Himalayan air. Breakfast and depart towards Badrinath by cab." },
      { time: "08:00 AM", icon: <Waves className="w-4 h-4" />, text: "Stop at Devprayag Sangam — where two rivers merge into the Ganga. A spiritual and visual feast." },
      { time: "01:00 PM", icon: <Mountain className="w-4 h-4" />, text: "Arrive Joshimath. Lunch with mountain views. Optional: visit Shankaracharya Math and Narasimha Temple." },
      { time: "04:00 PM", icon: <Car className="w-4 h-4" />, text: "Continue scenic mountain drive through Vishnuprayag, cliffside roads, and gushing Alaknanda gorge." },
      { time: "06:30 PM", icon: <Droplets className="w-4 h-4" />, text: "Reach Badrinath. Freshen up in the sacred Tapt Kund hot springs before temple darshan." },
      { time: "08:00 PM", icon: <Star className="w-4 h-4" />, text: "Badrinath Temple evening aarti. Dinner and rest — you're at 10,000 ft in the Himalayas." },
    ],
  },
  {
    day: "Day 3",
    date: "18 May 2026 (Sunday)",
    title: "Mana Village & Homeward Journey",
    color: "from-amber-400 to-orange-500",
    steps: [
      { time: "05:30 AM", icon: <Sunrise className="w-4 h-4" />, text: "Badrinath Temple morning darshan at sunrise — golden light on the snow peaks. A moment you'll never forget." },
      { time: "08:00 AM", icon: <TreePine className="w-4 h-4" />, text: "Visit Mana Village: the last Indian village. Explore Vyas cave, Ganesh cave, the Saraswati river, and local crafts." },
      { time: "11:00 AM", icon: <Car className="w-4 h-4" />, text: "Depart Badrinath. Begin the long but breathtaking return journey through the Himalayan valleys." },
      { time: "03:00 PM", icon: <Mountain className="w-4 h-4" />, text: "Short break at Rishikesh. Optional: visit Ram Jhula, grab local street food, do some souvenir shopping." },
      { time: "06:00 PM", icon: <Train className="w-4 h-4" />, text: "Head towards Haridwar/Dehradun for train back to Delhi." },
      { time: "11:00 PM", icon: <MapPin className="w-4 h-4" />, text: "Arrive New Delhi. Your hearts fuller, your spirits lighter. See you on the next girls' trip." },
    ],
  },
];

const gallery = [
  { src: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80", alt: "Himalayan mountains sunrise", tall: true },
  { src: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=600&q=80", alt: "Ganga Aarti Haridwar" },
  { src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=600&q=80", alt: "Mountain river sangam" },
  { src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80", alt: "Himalayan peaks view", tall: true },
  { src: "https://images.unsplash.com/photo-1512036666432-2181c1f26420?auto=format&fit=crop&w=600&q=80", alt: "Mountain village" },
  { src: "https://images.unsplash.com/photo-1559494007-9f5847c49d94?auto=format&fit=crop&w=600&q=80", alt: "Sacred hot springs" },
  { src: "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=800&q=80", alt: "Girls hiking mountains", tall: false },
  { src: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=600&q=80", alt: "Travel girls trip" },
  { src: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=800&q=80", alt: "Himalayan landscape aerial" },
];

const included = [
  "Sleeper / AC Train tickets (Delhi–Haridwar–Delhi)",
  "Non-AC private cab for all sightseeing",
  "2 nights hotel stay (double/triple sharing)",
  "Daily breakfast & dinner",
  "All entry fees & local sightseeing guide",
  "24/7 trip coordinator support",
  "First-aid kit on board",
];

const excluded = [
  "Flights or personal travel to Delhi station",
  "Lunch and personal snacks",
  "Personal shopping or souvenirs",
  "Travel insurance",
  "Any activity not mentioned in itinerary",
  "Room upgrades or special requests",
];

const testimonials = [
  {
    name: "Priya S.",
    location: "Delhi",
    stars: 5,
    text: "I've traveled a lot, but nothing touched my soul like Badrinath with these girls. The Ganga Aarti at midnight, the misty mountains at dawn — I ugly cried twice and I'm not even embarrassed. Booking again for next season!",
    avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=100&q=80",
  },
  {
    name: "Ananya M.",
    location: "Mumbai",
    stars: 5,
    text: "Came for the spirituality, stayed for the friendships. Our coordinator was incredible — felt safe every single moment. Mana Village is unreal. Highly recommend for any group of girls who want to feel something bigger than themselves.",
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=100&q=80",
  },
  {
    name: "Riya K.",
    location: "Bengaluru",
    stars: 5,
    text: "₹6499 for THIS experience?! Are you serious? The views, the food, the energy of the group — I still have the mountains in my eyes. Already planned a return trip. The Tapt Kund hot springs after the long drive? Absolute heaven.",
    avatar: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=100&q=80",
  },
];

const packing = [
  "Warm fleece or down jacket (nights are cold!)",
  "Comfortable walking shoes / trekking sandals",
  "Dupatta or scarf for temple visits",
  "Government-issued ID proof (mandatory)",
  "Sufficient cash (ATMs are sparse in mountains)",
  "Power bank — fully charged",
  "Small first aid kit & personal medicines",
  "Sunscreen SPF 50+ and lip balm",
  "Reusable water bottle",
  "Light rain jacket or poncho",
];

const safetyItems = [
  { title: "Vetted Female-Friendly Hotels", desc: "All accommodation is handpicked with safety and comfort in mind for women travelers." },
  { title: "24/7 Trip Coordinator", desc: "A dedicated coordinator is reachable at all times throughout the journey." },
  { title: "Trusted Local Guide", desc: "Experienced, background-verified local guide accompanies the group at all times." },
  { title: "Safe, Well-Lit Routes", desc: "All driving routes are pre-planned on safe, well-maintained roads with no isolated stretches." },
  { title: "Emergency Protocol", desc: "Clear emergency contact list, nearest hospital info, and group WhatsApp for instant coordination." },
  { title: "Verified Vehicle & Driver", desc: "Cab and driver are registered, police-verified, and well-reviewed by previous travelers." },
];

export default function Home() {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [musicPlaying, setMusicPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const target = new Date("2026-05-16T05:00:00").getTime();
    const tick = () => {
      const diff = target - Date.now();
      if (diff <= 0) return;
      setTime({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio("https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3");
      audioRef.current.loop = true;
      audioRef.current.volume = 0.3;
    }
    if (musicPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {});
    }
    setMusicPlaying(!musicPlaying);
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

      {/* ── Sticky Floating Buttons ── */}
      <div className="fixed bottom-6 right-5 z-50 flex flex-col gap-3">
        <button
          onClick={toggleMusic}
          data-testid="button-music-toggle"
          title={musicPlaying ? "Pause music" : "Play ambient music"}
          className="w-11 h-11 rounded-full bg-white/80 backdrop-blur-md shadow-lg border border-primary/30 flex items-center justify-center hover:scale-110 transition-transform"
        >
          {musicPlaying ? <VolumeX className="w-5 h-5 text-primary" /> : <Music className="w-5 h-5 text-muted-foreground" />}
        </button>
        <button
          onClick={() => scrollTo("pricing")}
          data-testid="button-book-now-sticky"
          className="w-11 h-11 rounded-full bg-primary shadow-lg flex items-center justify-center hover:scale-110 transition-transform md:hidden"
        >
          <Heart className="w-5 h-5 text-white" />
        </button>
      </div>

      {/* ── Sticky Desktop CTA ── */}
      <div className="hidden md:flex fixed top-0 left-0 right-0 z-40 justify-end pr-8 pt-4">
        <button
          onClick={() => scrollTo("pricing")}
          data-testid="button-book-now-desktop"
          className="bg-primary/90 backdrop-blur-md text-white font-semibold px-6 py-2.5 rounded-full shadow-lg hover:bg-primary transition-colors border border-white/20 text-sm"
        >
          Book Now — ₹6499
        </button>
      </div>

      {/* ═══════════════════════════════════════
          HERO
      ═══════════════════════════════════════ */}
      <section className="relative h-[100dvh] min-h-[600px] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=2000&q=85"
            alt="Himalayan mountains sunrise"
            className="w-full h-full object-cover object-center scale-105"
            style={{ transform: "scale(1.05)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-background/80" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="inline-block text-xs md:text-sm font-semibold uppercase tracking-[0.25em] bg-white/20 backdrop-blur-md border border-white/30 text-white px-4 py-1.5 rounded-full mb-6"
          >
            New Delhi Departure · 16 May 2026
          </motion.span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-white font-bold mb-5 drop-shadow-xl leading-tight">
            ✨ GIRLS ONLY<br />SPIRITUAL GETAWAY ✨
          </h1>

          <p className="text-lg md:text-xl text-white/85 font-normal mb-10 max-w-xl mx-auto drop-shadow">
            A soulful 3-day escape to the sacred Himalayas — Badrinath Dham, mountain roads, and the divine energy of the Ganga.
          </p>

          {/* Countdown */}
          <div className="flex items-center justify-center gap-2 md:gap-4 mb-10">
            {[
              { val: time.days, label: "Days" },
              { val: time.hours, label: "Hrs" },
              { val: time.minutes, label: "Min" },
              { val: time.seconds, label: "Sec" },
            ].map(({ val, label }, i) => (
              <div key={label} className="flex items-center gap-2 md:gap-4">
                <div className="text-center bg-black/30 backdrop-blur-md border border-white/20 rounded-xl px-3 md:px-5 py-2 min-w-[56px] md:min-w-[72px]">
                  <div className="text-2xl md:text-4xl font-serif font-bold text-white tabular-nums">
                    {String(val).padStart(2, "0")}
                  </div>
                  <div className="text-[10px] uppercase tracking-widest text-white/70 mt-0.5">{label}</div>
                </div>
                {i < 3 && <span className="text-white/50 text-xl font-bold">:</span>}
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => scrollTo("pricing")}
              data-testid="button-hero-cta"
              className="bg-white text-foreground font-bold px-8 py-4 rounded-full text-lg shadow-2xl hover:shadow-white/30 hover:scale-105 transition-all"
            >
              Claim Your Spot — ₹6499
            </button>
            <button
              onClick={() => scrollTo("itinerary")}
              data-testid="button-view-itinerary"
              className="text-white border border-white/40 backdrop-blur-md px-6 py-4 rounded-full text-sm hover:bg-white/10 transition-all"
            >
              View Itinerary
            </button>
          </div>
        </motion.div>

        <button
          onClick={() => scrollTo("overview")}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/60 hover:text-white transition-colors animate-bounce"
        >
          <ChevronDown className="w-7 h-7" />
        </button>
      </section>

      {/* ═══════════════════════════════════════
          TRIP OVERVIEW STRIP
      ═══════════════════════════════════════ */}
      <section id="overview" className="bg-primary/15 border-y border-primary/25 py-8">
        <FadeInSection>
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { icon: <MapPin className="w-6 h-6 text-primary mx-auto mb-2" />, label: "Destination", value: "Badrinath Dham" },
                { icon: <Calendar className="w-6 h-6 text-primary mx-auto mb-2" />, label: "Departs", value: "16 May 2026" },
                { icon: <Clock className="w-6 h-6 text-primary mx-auto mb-2" />, label: "Duration", value: "3 Days / 2 Nights" },
                { icon: <Banknote className="w-6 h-6 text-primary mx-auto mb-2" />, label: "Price", value: "₹6499/person" },
              ].map((item) => (
                <FadeItem key={item.label}>
                  {item.icon}
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">{item.label}</p>
                  <p className="font-bold text-foreground mt-0.5">{item.value}</p>
                </FadeItem>
              ))}
            </div>
            <FadeItem>
              <p className="text-center text-sm text-muted-foreground mt-6 font-medium">
                Package includes: <span className="text-foreground font-semibold">Train Travel · Hotel Stay · Sightseeing · Breakfast & Dinner</span>
              </p>
            </FadeItem>
          </div>
        </FadeInSection>
      </section>

      {/* ═══════════════════════════════════════
          HIGHLIGHTS
      ═══════════════════════════════════════ */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <FadeInSection className="text-center mb-16">
            <FadeItem>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">What Awaits You</span>
            </FadeItem>
            <FadeItem>
              <h2 className="text-3xl md:text-5xl font-serif font-bold mt-3 mb-4">Trip Highlights</h2>
            </FadeItem>
            <FadeItem>
              <p className="text-muted-foreground max-w-xl mx-auto">Six sacred stops. Each one will leave you breathless, tearful, or both.</p>
            </FadeItem>
          </FadeInSection>

          <FadeInSection className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((h) => (
              <FadeItem key={h.name}>
                <div className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 cursor-default">
                  <div className="h-52 overflow-hidden">
                    <img
                      src={h.img}
                      alt={h.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className={`absolute inset-0 bg-gradient-to-t ${h.color} via-transparent to-transparent opacity-60`} />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                    <div className="flex items-center gap-2 text-white mb-1">
                      {h.icon}
                      <h3 className="font-bold font-serif text-base">{h.name}</h3>
                    </div>
                    <p className="text-white/80 text-xs leading-relaxed">{h.desc}</p>
                  </div>
                </div>
              </FadeItem>
            ))}
          </FadeInSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          ITINERARY
      ═══════════════════════════════════════ */}
      <section id="itinerary" className="py-24 px-4 bg-secondary/20">
        <div className="container mx-auto max-w-4xl">
          <FadeInSection className="text-center mb-16">
            <FadeItem>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Day-by-Day Breakdown</span>
            </FadeItem>
            <FadeItem>
              <h2 className="text-3xl md:text-5xl font-serif font-bold mt-3 mb-4">Your Itinerary</h2>
            </FadeItem>
            <FadeItem>
              <p className="text-muted-foreground max-w-xl mx-auto">Every moment is planned so all you have to do is show up and feel alive.</p>
            </FadeItem>
          </FadeInSection>

          <div className="space-y-8">
            {itinerary.map((day, di) => (
              <FadeInSection key={day.day}>
                <FadeItem>
                  <div className="rounded-2xl overflow-hidden shadow-lg border border-border/50">
                    <div className={`bg-gradient-to-r ${day.color} p-5 text-white`}>
                      <div className="flex items-center justify-between flex-wrap gap-2">
                        <div>
                          <span className="text-xs font-bold uppercase tracking-widest opacity-80">{day.date}</span>
                          <h3 className="text-xl md:text-2xl font-serif font-bold mt-0.5">{day.day} — {day.title}</h3>
                        </div>
                        <span className="text-3xl font-serif font-bold opacity-30">0{di + 1}</span>
                      </div>
                    </div>
                    <div className="bg-card/80 backdrop-blur-md p-5 space-y-0">
                      {day.steps.map((step, si) => (
                        <div key={si} className="flex gap-4 py-3 border-b border-border/40 last:border-0">
                          <div className="flex flex-col items-center gap-1 shrink-0">
                            <div className="w-8 h-8 rounded-full bg-primary/15 flex items-center justify-center text-primary">
                              {step.icon}
                            </div>
                            {si < day.steps.length - 1 && <div className="w-px h-full min-h-[20px] bg-border/50" />}
                          </div>
                          <div className="pb-2">
                            <span className="text-xs font-bold text-primary uppercase tracking-wider">{step.time}</span>
                            <p className="text-sm text-foreground mt-0.5 leading-relaxed">{step.text}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </FadeItem>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          PHOTO GALLERY
      ═══════════════════════════════════════ */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <FadeInSection className="text-center mb-14">
            <FadeItem>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Visual Diary</span>
            </FadeItem>
            <FadeItem>
              <h2 className="text-3xl md:text-5xl font-serif font-bold mt-3 mb-4">Capture the Moments</h2>
            </FadeItem>
          </FadeInSection>

          <FadeInSection className="columns-2 md:columns-3 gap-4 space-y-4">
            {gallery.map((img, i) => (
              <FadeItem key={i}>
                <div className="break-inside-avoid rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all hover:scale-[1.02] cursor-pointer">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full object-cover"
                    style={{ aspectRatio: img.tall ? "3/4" : "4/3" }}
                    loading="lazy"
                  />
                </div>
              </FadeItem>
            ))}
          </FadeInSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          INCLUDED / EXCLUDED
      ═══════════════════════════════════════ */}
      <section className="py-24 px-4 bg-muted/30">
        <div className="container mx-auto max-w-5xl">
          <FadeInSection className="text-center mb-14">
            <FadeItem>
              <h2 className="text-3xl md:text-4xl font-serif font-bold">What's Included</h2>
            </FadeItem>
          </FadeInSection>

          <FadeInSection className="grid md:grid-cols-2 gap-6">
            <FadeItem>
              <div className="rounded-2xl border border-green-200/60 bg-green-50/60 backdrop-blur-md p-6 shadow-sm">
                <h3 className="font-bold text-green-700 text-lg mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" /> Included
                </h3>
                <ul className="space-y-3">
                  {included.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-foreground">
                      <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeItem>
            <FadeItem>
              <div className="rounded-2xl border border-red-200/60 bg-red-50/60 backdrop-blur-md p-6 shadow-sm">
                <h3 className="font-bold text-red-500 text-lg mb-4 flex items-center gap-2">
                  <XCircle className="w-5 h-5" /> Not Included
                </h3>
                <ul className="space-y-3">
                  {excluded.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-foreground">
                      <XCircle className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeItem>
          </FadeInSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          PRICING
      ═══════════════════════════════════════ */}
      <section id="pricing" className="py-28 px-4 bg-gradient-to-b from-primary/10 via-secondary/20 to-background">
        <div className="container mx-auto max-w-2xl">
          <FadeInSection className="text-center">
            <FadeItem>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Limited Spots Available</span>
            </FadeItem>
            <FadeItem>
              <h2 className="text-3xl md:text-5xl font-serif font-bold mt-3 mb-3">Your Himalayan Escape Awaits</h2>
            </FadeItem>
            <FadeItem>
              <p className="text-muted-foreground mb-10">Everything planned. Just bring your soul and your girls.</p>
            </FadeItem>

            <FadeItem>
              <div className="relative rounded-3xl overflow-hidden bg-white/70 backdrop-blur-xl border border-primary/25 shadow-2xl p-10">
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-secondary to-accent" />
                <div className="space-y-2 mb-8">
                  <p className="text-sm font-semibold uppercase tracking-widest text-primary">All Inclusive Package</p>
                  <div className="text-7xl font-serif font-bold text-foreground">₹6499</div>
                  <p className="text-muted-foreground">per person · Train + Hotel + Sightseeing + Meals</p>
                </div>
                <ul className="space-y-2 text-sm text-left mb-8 max-w-xs mx-auto">
                  {["Train Travel (Delhi–Haridwar–Delhi)", "2 nights hotel (double sharing)", "All sightseeing & guide", "Daily breakfast & dinner", "24/7 support"].map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => window.open("tel:+919876543210")}
                  data-testid="button-book-main"
                  className="w-full bg-primary hover:bg-primary/85 text-white font-bold py-5 rounded-2xl text-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all"
                >
                  Book Now — Only 12 Spots
                </button>
                <p className="text-xs text-muted-foreground mt-4">Call us at +91-98765-43210 or DM on Instagram to reserve your spot.</p>
              </div>
            </FadeItem>
          </FadeInSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SAFETY
      ═══════════════════════════════════════ */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-5xl">
          <FadeInSection className="text-center mb-14">
            <FadeItem>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">You're In Safe Hands</span>
            </FadeItem>
            <FadeItem>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mt-3 mb-3">Safety First, Always</h2>
            </FadeItem>
            <FadeItem>
              <p className="text-muted-foreground max-w-lg mx-auto">Every detail of this trip is designed specifically for women traveling solo or in groups.</p>
            </FadeItem>
          </FadeInSection>

          <FadeInSection className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {safetyItems.map((s) => (
              <FadeItem key={s.title}>
                <div className="rounded-2xl p-5 bg-card/80 backdrop-blur-md border border-border/50 shadow-sm hover:shadow-md transition-shadow">
                  <Shield className="w-8 h-8 text-primary mb-3" />
                  <h4 className="font-bold text-foreground mb-1">{s.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </FadeItem>
            ))}
          </FadeInSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          PACKING ESSENTIALS
      ═══════════════════════════════════════ */}
      <section className="py-24 px-4 bg-secondary/15">
        <div className="container mx-auto max-w-3xl">
          <FadeInSection className="text-center mb-14">
            <FadeItem>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">What to Bring</span>
            </FadeItem>
            <FadeItem>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mt-3 mb-3">Packing Essentials</h2>
            </FadeItem>
            <FadeItem>
              <p className="text-muted-foreground">Mountain trips have different rules. Pack smart.</p>
            </FadeItem>
          </FadeInSection>

          <FadeInSection className="grid sm:grid-cols-2 gap-3">
            {packing.map((item) => (
              <FadeItem key={item}>
                <div className="flex items-start gap-3 bg-card/70 backdrop-blur-md rounded-xl p-4 border border-border/40 hover:border-primary/30 transition-colors">
                  <Backpack className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              </FadeItem>
            ))}
          </FadeInSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          TESTIMONIALS
      ═══════════════════════════════════════ */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-5xl">
          <FadeInSection className="text-center mb-14">
            <FadeItem>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Real Stories</span>
            </FadeItem>
            <FadeItem>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mt-3 mb-3">Girls Who've Been There</h2>
            </FadeItem>
          </FadeInSection>

          <FadeInSection className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <FadeItem key={t.name}>
                <div className="rounded-2xl bg-card/80 backdrop-blur-md border border-border/50 p-6 shadow-md hover:shadow-lg transition-shadow h-full flex flex-col">
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: t.stars }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-sm text-foreground leading-relaxed flex-1 italic">"{t.text}"</p>
                  <div className="flex items-center gap-3 mt-5 pt-4 border-t border-border/40">
                    <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                    <div>
                      <p className="font-bold text-sm text-foreground">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.location}</p>
                    </div>
                  </div>
                </div>
              </FadeItem>
            ))}
          </FadeInSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FINAL CTA
      ═══════════════════════════════════════ */}
      <section className="py-28 px-4 bg-gradient-to-b from-primary/20 via-secondary/30 to-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=60"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <FadeInSection className="relative z-10 text-center max-w-2xl mx-auto">
          <FadeItem>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 leading-tight">
              Ready for your soulful Himalayan escape with your girls?
            </h2>
          </FadeItem>
          <FadeItem>
            <p className="text-muted-foreground text-lg mb-10 max-w-lg mx-auto">
              Limited seats — only 12 spots available. The mountains are calling, and they're calling all of you together.
            </p>
          </FadeItem>
          <FadeItem>
            <button
              onClick={() => scrollTo("pricing")}
              data-testid="button-final-cta"
              className="bg-primary text-white font-bold px-10 py-5 rounded-full text-xl shadow-2xl hover:shadow-primary/40 hover:scale-105 transition-all"
            >
              Book Your Spot Now
            </button>
          </FadeItem>
          <FadeItem>
            <p className="text-sm text-muted-foreground mt-5">Starting from ₹6499 · Departs 16 May 2026 · New Delhi</p>
          </FadeItem>
        </FadeInSection>
      </section>

      {/* ═══════════════════════════════════════
          FOOTER
      ═══════════════════════════════════════ */}
      <footer className="bg-foreground/5 border-t border-border/50 py-14 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-3 gap-10 mb-10">
            <div>
              <h3 className="font-serif font-bold text-xl mb-3">Badrinath Girls Trip</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                A carefully curated spiritual girls' getaway to the sacred Himalayas. Every detail designed for women, by women who love to travel.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider">Contact Us</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-primary" />
                  <a href="tel:+919876543210" className="hover:text-foreground transition-colors">+91-98765-43210</a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-primary" />
                  <a href="mailto:hello@badrinathgirlstrip.com" className="hover:text-foreground transition-colors">hello@badrinathgirlstrip.com</a>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  New Delhi, India
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider">Follow Us</h4>
              <div className="flex gap-3">
                {[
                  { icon: <Instagram className="w-5 h-5" />, label: "Instagram" },
                  { icon: <Facebook className="w-5 h-5" />, label: "Facebook" },
                  { icon: <Twitter className="w-5 h-5" />, label: "Twitter" },
                ].map((s) => (
                  <button
                    key={s.label}
                    data-testid={`button-social-${s.label.toLowerCase()}`}
                    className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"
                  >
                    {s.icon}
                  </button>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-4">DM us on Instagram to book your spot!</p>
            </div>
          </div>
          <div className="border-t border-border/40 pt-6 text-center text-xs text-muted-foreground">
            © 2026 Badrinath Girls Trip · Made with love for soulful women travelers · All rights reserved
          </div>
        </div>
      </footer>
    </div>
  );
}
