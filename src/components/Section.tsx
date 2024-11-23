import React from "react";

interface SectionProps {
    title: string;
    content: string;
}

const Section: React.FC<SectionProps> = ({ title, content }) => {
    return (
        <section className="bg-white shadow-lg rounded-md p-6">
        <h2 className="text-xl font-semibold mb-4">{title}</h2>
            <p className="text-gray-700">{content}</p>
        </section>
);
};

export default Section;