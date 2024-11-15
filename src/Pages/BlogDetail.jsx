import React, { useState, useEffect } from "react";
import Header from "../Components/Header";
// import Footer from "../Layouts/Footer";
import { useParams } from "react-router";
import DOMPurify from "dompurify";

const BlogDetail = () => {
  //get blog id from url
  //   const { blogId } = useParams();

  const blogData = [
    {
      title: "Top Trends in Business Growth",
      description:
        "Discover the latest trends in business growth and how to leverage them for success.",
      name: "Ranold Jeff",
      date: "2023-01-15",
      keywords: ["business", "trends", "growth"],
      content: `<p><strong>In the world of business, staying ahead of the competition is crucial for success. </strong> As the global market evolves, businesses must adapt to changing trends, embrace new technologies, and respond quickly to shifts in consumer behavior. One of the key factors that separate successful companies from others is their ability to innovate and remain relevant in their respective industries. Companies that constantly challenge the status quo are often the ones that lead the market, setting the trends rather than following them. Innovation isn't just about new products or services—it's about improving processes, customer experiences, and the way businesses interact with their audience.</p><p><em>As we move into a new era, sustainable business practices are becoming increasingly important. </em> Consumers are now more aware of the environmental impact of the companies they support, which means that businesses must consider sustainability at every level of their operations. Whether it's adopting eco-friendly practices, reducing waste, or sourcing materials responsibly, companies that prioritize sustainability are gaining favor with both customers and investors. Sustainability isn't just a trend—it’s a business model that has long-term benefits. In fact, businesses that make sustainability a core part of their identity tend to perform better financially in the long run, as they attract more loyal customers and investors who value ethical practices.</p><p>Another essential aspect of modern business success is fostering strong relationships and building networks. <strong>Networking is not just about attending events and exchanging business cards.</strong> It's about creating meaningful connections that can lead to collaborations, partnerships, and opportunities that benefit both parties. In today’s interconnected world, having a strong professional network can open doors that were previously inaccessible. From industry peers to potential clients and mentors, the people you meet can play a significant role in helping you grow your business, whether by providing insights, offering support, or connecting you to other valuable resources.</p>`,
    },
    {
      title: "Building a Sustainable Startup",
      description:
        "Learn how to build a sustainable startup that not only thrives but also leaves a positive impact on the world.",
      name: "Martha Kent",
      date: "2023-03-08",
      keywords: ["startup", "sustainability", "business"],
      content:
        "<p><strong>In the world of business, staying ahead of the competition is crucial for success. </strong> As the global market evolves, businesses must adapt to changing trends, embrace new technologies, and respond quickly to shifts in consumer behavior. One of the key factors that separate successful companies from others is their ability to innovate and remain relevant in their respective industries. Companies that constantly challenge the status quo are often the ones that lead the market, setting the trends rather than following them. Innovation isn't just about new products or services—it's about improving processes, customer experiences, and the way businesses interact with their audience.</p><p><em>As we move into a new era, sustainable business practices are becoming increasingly important. </em> Consumers are now more aware of the environmental impact of the companies they support, which means that businesses must consider sustainability at every level of their operations. Whether it's adopting eco-friendly practices, reducing waste, or sourcing materials responsibly, companies that prioritize sustainability are gaining favor with both customers and investors. Sustainability isn't just a trend—it’s a business model that has long-term benefits. In fact, businesses that make sustainability a core part of their identity tend to perform better financially in the long run, as they attract more loyal customers and investors who value ethical practices.</p><p>Another essential aspect of modern business success is fostering strong relationships and building networks. <strong>Networking is not just about attending events and exchanging business cards.</strong> It's about creating meaningful connections that can lead to collaborations, partnerships, and opportunities that benefit both parties. In today’s interconnected world, having a strong professional network can open doors that were previously inaccessible. From industry peers to potential clients and mentors, the people you meet can play a significant role in helping you grow your business, whether by providing insights, offering support, or connecting you to other valuable resources.</p>",
    },
  ];

  const [sanitizedContent, setSanitizedContent] = useState("");
  // DUMMY content
  //find the blog by id
  const blog = blogData[0];

  //if blog not found
  if (!blog) {
    return <div>Blog not found</div>;
  }

  useEffect(() => {
    // Step 1: Sanitize the HTML content
    const sanitizedHTML = DOMPurify.sanitize(blog.content);

    // Step 2: Add custom class to paragraphs using regex
    const styledHTML = sanitizedHTML.replace(/<p>/g, '<p class="mb-4">');

    // Step 3: Set sanitized and styled content
    setSanitizedContent(styledHTML);
  }, [blog.content]);

  return (
    <>
      <div>
        {/* Header */}
        <Header breadcrumb={"Blog Detail"} />

        {/* Blog Content START*/}
        <article>
          <div className="flex flex-col items-center justify-center mt-0">
            <div className="w-full px-6 md:px-16 bg-secondary py-10">
              {/* Title START */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center justify-items-center md:my-10 md:mx-16">
                {/* Button section - left */}
                <div className="flex justify-start w-full">
                  <button className="bg-accent text-white px-2 md:px-10 py-2 rounded hover:bg-primary transition flex items-center">
                    <i className="bx bx-arrow-back mr-2"></i>
                    Back
                  </button>
                </div>

                {/* Title section - center */}
                <div className="col-span-1 flex justify-center w-full">
                  <h1 className="text-3xl my-6 text-center text-primary font-bold">
                    {blog?.title}
                  </h1>
                </div>

                {/* Empty section - right */}
                <div className="w-full"></div>
              </div>
              {/* Title END */}

              {/* Blog info START */}
              <div className="flex items-center mt-2 justify-start w-full px-2 md:px-16">
                <span className="text-lg font-semibold">{blog?.name}</span>
                <span className="ml-4 text-gray-500">{blog?.date}</span>
              </div>
              <div className="mt-4 px-2 md:px-16">
                <span className="font-semibold">Keywords: </span>
                <span>{blog?.keywords.join(", ")}</span>
              </div>
            </div>
            {/* Blog info END */}

            {/* Blog content START */}
            {/* Parse html content */}
            <div
              className="mt-8 px-6 md:px-16 md:w-4/5 w-8/10 mx-auto py-4"
              dangerouslySetInnerHTML={{ __html: sanitizedContent }}
            />
            {/* Blog content END */}
          </div>
        </article>
      </div>
    </>
  );
};

export default BlogDetail;
