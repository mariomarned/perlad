import { Hero } from "@/components/Hero";
import { Products } from "@/components/Products";
import { About } from "@/components/About";
import { Sustainability } from "@/components/Sustainability";
import { Testimonials } from "@/components/Testimonials";
import { Blog } from "@/components/Blog";
import { Clients } from "@/components/Clients";
import { Distributors } from "@/components/Distributors";
import { Contact } from "@/components/Contact";
import { HomeClient } from "@/components/HomeClient";
import { getRecentPosts } from "@/sanity/queries";

export default async function Home() {
  const accentColor = "#94C11F";
  const recentPosts = await getRecentPosts(3);

  return (
    <HomeClient accentColor={accentColor}>
      <Hero accentColor={accentColor} />
      <Products accentColor={accentColor} />
      <About accentColor={accentColor} />
      <Sustainability accentColor={accentColor} />
      <Clients accentColor={accentColor} />
      <Testimonials accentColor={accentColor} />
      <Distributors accentColor={accentColor} />
      <Blog accentColor={accentColor} posts={recentPosts} />
      <Contact accentColor={accentColor} />
    </HomeClient>
  );
}
