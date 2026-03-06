import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Calendar, Users, MapPin, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

/**
 * DESIGN PHILOSOPHY: Cinematic Minimalism with Golden Accents
 * - Deep charcoal background (#0A0A0A) creates a premium, theatrical atmosphere
 * - Golden yellow (#FFD700) accents guide attention and evoke Sri Lankan vibrancy
 * - Large serif typography (Playfair Display) for dramatic impact
 * - Vertical storytelling through scroll-driven animations and parallax effects
 * - Minimalist layout with generous whitespace and asymmetric positioning
 */

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [, setLocation] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const destinations = [
    {
      id: 1,
      name: "Sigiriya",
      subtitle: "The Lion Rock",
      description: "An ancient rock fortress rising 200 meters above the jungle, offering breathtaking views and rich history.",
      image: "/images/sigiriya-hero.jpg",
      highlights: ["Ancient Fortress", "Panoramic Views", "Cultural Heritage"],
      longDescription: "Sigiriya or Sinhagiri is an ancient rock fortress located in the northern Matale District near the town of Dambulla in the Central Province, Sri Lanka. It is a site of historical and archaeological significance that is dominated by a massive column of rock around 180 metres high.",
    },
    {
      id: 2,
      name: "Ella",
      subtitle: "Tea Country",
      description: "Misty mountains covered in emerald tea plantations, perfect for hiking and experiencing authentic Sri Lankan culture.",
      image: "/images/ella-tea-plantations.jpg",
      highlights: ["Tea Plantations", "Mountain Trails", "Local Villages"],
      longDescription: "Ella is a small town in the Badulla District of Uva Province, Sri Lanka. It is approximately 200 kilometres east of Colombo and is situated at an elevation of 1,041 metres above sea level. The area has a rich bio-diversity, dense with numerous varieties of flora and fauna.",
    },
    {
      id: 3,
      name: "Galle",
      subtitle: "Coastal Heritage",
      description: "A UNESCO World Heritage fortress overlooking the Indian Ocean, blending history with pristine beaches.",
      image: "/images/galle-fort-sunset.jpg",
      highlights: ["Historic Fort", "Beach Access", "Local Markets"],
      longDescription: "Galle is a major city in Sri Lanka, situated on the southwestern tip, 119 km from Colombo. Galle is the administrative capital of Southern Province, Sri Lanka and is the district capital of Galle District.",
    },
    {
      id: 4,
      name: "Kandy",
      subtitle: "Sacred City",
      description: "The former royal capital, home to the sacred Temple of the Sacred Tooth Relic and vibrant local markets.",
      image: "/images/kandy-temple.webp",
      highlights: ["Sacred Temple", "Local Markets", "Cultural Heritage"],
      longDescription: "Kandy is a large city in central Sri Lanka. It's set on a plateau surrounded by mountains, which are home to tea plantations and biodiverse rainforest. The city's heart is scenic Kandy Lake (Bogambara Lake).",
    },
    {
      id: 5,
      name: "Anuradhapura",
      subtitle: "Ancient Capital",
      description: "One of the ancient capitals of Sri Lanka, famous for its well-preserved ruins of an ancient Sinhala civilization.",
      image: "/images/XNJNDdJokE4R.jpg",
      highlights: ["Sacred Bodhi Tree", "Ruwanwelisaya", "Ancient Monasteries"],
      longDescription: "Anuradhapura is a major city in Sri Lanka. It is the capital city of North Central Province, Sri Lanka and the capital of Anuradhapura District. Anuradhapura is one of the ancient capitals of Sri Lanka, famous for its well-preserved ruins of an ancient Sinhala civilization.",
    },
    {
      id: 6,
      name: "Polonnaruwa",
      subtitle: "Medieval Kingdom",
      description: "The second most ancient of Sri Lanka's kingdoms, Polonnaruwa was first declared the capital city by King Vijayabahu I.",
      image: "/images/Lo49JZAvks4h.jpg",
      highlights: ["Gal Vihara", "Royal Palace", "Parakrama Samudra"],
      longDescription: "Polonnaruwa is the main town of Polonnaruwa District in North Central Province, Sri Lanka. Kaduruwela area is the Polonnaruwa New Town and the other part of Polonnaruwa remains as the royal ancient city of the Kingdom of Polonnaruwa.",
    },
    {
      id: 7,
      name: "Dambulla",
      subtitle: "Cave Temple",
      description: "Home to the largest and best-preserved cave temple complex in Sri Lanka, featuring stunning Buddhist murals and statues.",
      image: "/images/hxn3BDuCX5Rn.jpg",
      highlights: ["Golden Temple", "Cave Murals", "Rock Inscriptions"],
      longDescription: "Dambulla cave temple also known as the Golden Temple of Dambulla is a World Heritage Site in Sri Lanka, situated in the central part of the country. This site is situated 148 kilometres east of Colombo and 72 kilometres north of Kandy.",
    },
  ];

  const tourPackages = [
    {
      id: 1,
      title: "Cultural Triangle",
      duration: "5 Days",
      price: "From $599",
      description: "Explore ancient temples, sacred sites, and the legendary Sigiriya Rock.",
      includes: ["Guided Tours", "Accommodation", "Meals", "Transport"],
    },
    {
      id: 2,
      title: "Tea & Mountain Adventure",
      duration: "4 Days",
      price: "From $449",
      description: "Trek through misty tea plantations and discover hidden waterfalls.",
      includes: ["Hiking Guides", "Tea Factory Visit", "Accommodation", "Meals"],
    },
    {
      id: 3,
      title: "Coastal Escape",
      duration: "3 Days",
      price: "From $349",
      description: "Relax on pristine beaches and explore historic coastal fortresses.",
      includes: ["Beach Access", "Water Sports", "Accommodation", "Meals"],
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center bg-background/80 backdrop-blur-sm border-b border-border">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-bold tracking-tight"
        >
          SRI LANKA
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex gap-8 items-center"
        >
          <a href="#destinations" className="text-sm hover:text-accent transition-colors">
            Destinations
          </a>
          <a href="#tours" className="text-sm hover:text-accent transition-colors">
            Tours
          </a>
          <Button
            className="bg-accent text-accent-foreground hover:bg-accent/90"
            onClick={() => setLocation("/booking")}
          >
            Book Now
          </Button>
        </motion.div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax */}
        <motion.div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url(/images/sigiriya-hero.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            y: scrollY * 0.5,
          }}
        >
          {/* Grain Overlay */}
          <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' seed='2' /%3E%3C/filter%3E%3Crect width='400' height='400' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }}
          />
        </motion.div>

        {/* Hero Content */}
        <motion.div
          className="relative z-10 text-center max-w-4xl mx-auto px-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <span className="text-accent text-lg tracking-widest font-semibold">
              DISCOVER THE PEARL
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-8xl md:text-9xl font-bold mb-6 leading-none text-white"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            SRI LANKA
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto"
          >
            Experience the enchantment of ancient temples, misty mountains, pristine beaches, and vibrant culture.
          </motion.p>

          <motion.div variants={itemVariants} className="flex gap-4 justify-center">
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90"
              onClick={() => document.getElementById('tours')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Tours
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-accent text-accent hover:bg-accent/10 bg-black/20"
              onClick={() => document.getElementById('destinations')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Learn More
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm text-white/70">Scroll to Explore</span>
            <ChevronDown className="w-6 h-6 text-accent" />
          </div>
        </motion.div>
      </section>

      {/* Destinations Section */}
      <section id="destinations" className="py-24 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2
              className="text-6xl md:text-7xl font-bold mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Destinations
            </h2>
            <div className="w-24 h-1 bg-accent" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16">
            {destinations.map((destination, index) => (
              <motion.div
                key={destination.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="group"
              >
                {/* Image */}
                <div className="relative h-96 mb-8 overflow-hidden rounded-lg">
                  <motion.img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300" />
                </div>

                {/* Content */}
                <div>
                  <span className="text-accent text-sm tracking-widest font-semibold uppercase">
                    {destination.subtitle}
                  </span>
                  <h3
                    className="text-4xl font-bold mb-3 mt-2"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {destination.name}
                  </h3>
                  <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                    {destination.description}
                  </p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-3 mb-6">
                    {destination.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="px-4 py-2 bg-secondary text-secondary-foreground text-sm font-medium rounded-full"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>

                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
                        Explore →
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-3xl bg-background border-accent/20">
                      <DialogHeader>
                        <DialogTitle className="text-4xl font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                          {destination.name}
                        </DialogTitle>
                        <DialogDescription className="text-accent font-semibold tracking-widest uppercase">
                          {destination.subtitle}
                        </DialogDescription>
                      </DialogHeader>
                      <div className="mt-4 space-y-6">
                        <div className="aspect-video overflow-hidden rounded-lg">
                          <img src={destination.image} alt={destination.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="space-y-4">
                          <h4 className="text-xl font-bold">About {destination.name}</h4>
                          <p className="text-muted-foreground leading-relaxed">
                            {destination.longDescription}
                          </p>
                          <div className="grid grid-cols-2 gap-4 pt-4">
                            <div className="space-y-2">
                              <h5 className="font-bold text-accent">Top Highlights</h5>
                              <ul className="space-y-1">
                                {destination.highlights.map(h => (
                                  <li key={h} className="text-sm flex items-center gap-2">
                                    <span className="w-1 h-1 bg-accent rounded-full" /> {h}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="flex flex-col justify-end">
                              <Button
                                className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                                onClick={() => setLocation(`/booking?destination=${destination.name}`)}
                              >
                                Book Now
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tour Packages Section */}
      <section id="tours" className="py-24 px-6 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2
              className="text-6xl md:text-7xl font-bold mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Tour Packages
            </h2>
            <div className="w-24 h-1 bg-accent" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {tourPackages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-background border border-border p-8 hover:border-accent transition-colors duration-300 group rounded-lg"
              >
                <div className="mb-6">
                  <h3
                    className="text-2xl font-bold mb-2"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {pkg.title}
                  </h3>
                  <p className="text-accent text-lg font-semibold">{pkg.price}</p>
                </div>

                <div className="flex gap-4 mb-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{pkg.duration}</span>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">{pkg.description}</p>

                <div className="mb-8">
                  <p className="text-sm font-semibold text-accent mb-3">Includes:</p>
                  <ul className="space-y-2">
                    {pkg.includes.map((item) => (
                      <li key={item} className="text-sm text-muted-foreground flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90 group-hover:translate-y-[-2px] transition-transform"
                  onClick={() => setLocation(`/booking?package=${pkg.title}`)}
                >
                  Book Package
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-background border-t border-border">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2
            className="text-5xl md:text-6xl font-bold mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Ready for Your Adventure?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let us craft your perfect Sri Lankan experience. Contact us today for custom tour arrangements.
          </p>
          <div className="flex gap-4 justify-center">
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90"
              onClick={() => setLocation("/booking")}
            >
              Get in Touch
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-accent text-accent hover:bg-accent/10"
              onClick={() => document.getElementById('destinations')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Itineraries
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-secondary/50 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <h4 className="font-bold mb-4">About</h4>
              <p className="text-sm text-muted-foreground">
                Discover the magic of Sri Lanka with expertly curated tours and unforgettable experiences.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Destinations</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#destinations" className="hover:text-accent transition-colors">Sigiriya</a></li>
                <li><a href="#destinations" className="hover:text-accent transition-colors">Ella</a></li>
                <li><a href="#destinations" className="hover:text-accent transition-colors">Galle</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Tours</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#tours" className="hover:text-accent transition-colors">Cultural Triangle</a></li>
                <li><a href="#tours" className="hover:text-accent transition-colors">Tea & Mountains</a></li>
                <li><a href="#tours" className="hover:text-accent transition-colors">Coastal Escape</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Email: info@srilanka-tours.com</li>
                <li>Phone: +94 123 456 789</li>
                <li>Colombo, Sri Lanka</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-8 flex justify-between items-center text-sm text-muted-foreground">
            <p>&copy; 2026 Sri Lanka Tourism. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-accent transition-colors">Privacy</a>
              <a href="#" className="hover:text-accent transition-colors">Terms</a>
              <a href="#" className="hover:text-accent transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
