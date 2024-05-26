// app/data/fake-data/fake-chat-history/fake-chat-history.ts

import { eRoleType } from "@/utils/types";
import { readMultipleFiles } from '../utils/readFiles';

// List of sample files
const sampleFiles = [
    'sample-1.txt',
    'sample-2.txt',
    'sample-3.txt',
    'sample-4.txt',
];

async function initializeChatHistory() {
    const sampleFileContents = await readMultipleFiles(sampleFiles);

    const fakeChatHistory = [
        {
            chatId: "1001",
            msgArr: [
                { role: eRoleType.USER, content: "Hello. We're creating fake chat history." },
                { role: eRoleType.ASSISTANT, content: "That's a bad idea. You should connect the db instead!" },
                { role: eRoleType.USER, content: `ok. Can you give me a sample code for how I might get chat history for a user from MongoDb in a next.js app that is setup using app router?` },
                { role: eRoleType.ASSISTANT, content: sampleFileContents['sample-1.txt'] },
            ]
        },
        {
            chatId: "1002",
            msgArr: [
                { role: eRoleType.USER, content: "Give me 5 really great blog ideas for how to learn to use next.js and learn the latest technologies. Make sure one covers Vercel and one covers Next.js 14 and one covers using 'app router' and the last one should be whatever you think would be best.\n" +
                        "\n" +
                        "For each blog, I want you to give me a structured response that shows who the target audience is (developers) but specifically what type. Then, provide structured guidance that will help me write some really amazing content.\n" },
                { role: eRoleType.ASSISTANT, content: sampleFileContents['sample-2.txt'] },
            ],
        },
        {
            chatId: "1003",
            msgArr: [
                { role: eRoleType.USER, content: "I have a very important request. I need you to first give me a table that shows me the 5 biggest European cities, what country they are in, what primary language the people speak and what type of government system they have.\n" +
                        "\n" +
                        "Then, I want you to give me some sample python code I could use as a totally separate thing for how I would call the weather service with a city and country to get the weather for that place.\n" +
                        "\n" +
                        "Then, I want you to give me some sample react typescript code that would allow me to display travel information to a user. But these tasks are all unrelated.\n" +
                        "\n" +
                        "Finally, I've been trying to learn exactly what JSON is so can you then give me the same information about the European cities but as a json?\n" },
                { role: eRoleType.ASSISTANT, content: sampleFileContents['sample-3.txt'] },
                { role: eRoleType.USER, content: "This is really great. Now, suppose I have this json in my react app and I want to use it to display this specific information for my users in a table. Can you create the ui and the typescript files I would need to show this in a table and then allow them to click on one and have the values show in some input fields that are disabled at first, but if they click the edit button, they become enabled and they can make changes and save? When they save, I want it to update the json file please. I also want to add a \"notes\" field to this that will be blank for now, but they can add their own notes.\n" +
                        "\n" +
                        "Also, if I need to install any packages, make sure you give me those as well. \n" },
                { role: eRoleType.ASSISTANT, content: sampleFileContents['sample-4.txt'] },

            ],
        }
    ];

    return fakeChatHistory;
}

async function loadChatHistory() {
    return await initializeChatHistory();
}

export default loadChatHistory;
