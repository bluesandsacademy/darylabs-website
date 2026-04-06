import ArticleGrid from "@/components/shared/blog/article";
import NewsletterSection from "@/components/shared/blog/newsletter";
import FAQSection from "@/components/shared/home/faq";
import React from "react";

const BlogPage = () => {
  return (
    <div>
      <NewsletterSection />
      <ArticleGrid />
      <FAQSection />
    </div>
  );
};

export default BlogPage;
