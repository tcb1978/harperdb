import { Separator } from '@radix-ui/react-dropdown-menu';

export default async function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
      <h1 className="mb-4 text-4xl font-extrabold text-center text-amber-400 drop-shadow-lg">
        Welcome to <span className="text-white">HarperDB Next.js Application</span>
      </h1>
      <Separator className="bg-gray-700 w-2/3 h-0.5 mb-8" />
      <div className="max-w-xl space-y-4 text-center">
        <p className="text-lg text-gray-300">
          This is a <span className="font-semibold text-amber-300">simple application</span> that demonstrates how to use <span className="text-amber-300">HarperDB</span> with <span className="text-blue-400">Next.js</span>.
        </p>
        <p className="text-lg text-gray-400">
          You can <span className="font-semibold text-green-400">add</span>, <span className="font-semibold text-yellow-400">update</span>, and <span className="font-semibold text-red-400">delete</span> characters from the database.
        </p>
        <p className="text-lg text-gray-400">
          The application uses <span className="font-mono text-amber-200">Server-Sent Events (SSE)</span> to listen for changes in the database in real time.
        </p>
        <p className="text-lg text-gray-400">
          To seed the database, run the following command in your terminal:
        </p>
        <pre className="p-4 text-gray-200 bg-gray-800 rounded-md">
          <code className="text-sm">
            node seed.js
          </code>
        </pre>
      </div>
    </div>
  );
};
