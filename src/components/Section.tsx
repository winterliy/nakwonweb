import React from "react";

interface Command {
    command: string;
    description: string;
}

interface TableProps {
    title: string;
    commands: Command[];
}

const Section: React.FC<TableProps> = ({ title, commands }) => {
    return (
        <section className="bg-white shadow-lg rounded-md p-6">
            <h2 className="text-xl font-semibold mb-4">{title}</h2>
            <table className="min-w-full border-2 border-gray-400 border-collapse">
                <thead>
                <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2 text-left">명령어</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">설명</th>
                </tr>
                </thead>
                <tbody>
                {commands.map((cmd, index) => (
                    <tr
                        key={index}
                        className={`${
                            index % 2 === 0 ? "bg-white" : "bg-gray-50"
                        } hover:bg-blue-100`}
                    >
                        <td className="border border-gray-300 px-4 py-2">{cmd.command}</td>
                        <td className="border border-gray-300 px-4 py-2">
                            {cmd.description}
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </section>
    );
};

export default Section;