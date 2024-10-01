import ItemList from './item-list';

const Page = () => {
  return (
    <main className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-extrabold bg-gray-700 p-3 mb-2 rounded-lg">Shopping List</h1>
      <ItemList />
    </main>
  );
};

export default Page;