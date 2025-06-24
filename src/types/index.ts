export type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string; // ✅ Add this if not present
  category: string;    // ✅ Add this
};
