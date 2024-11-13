namespace AUTH {
  type GetResponse = {
    id: number;
    name: string;
    author: string;
    price: number;
    image: string;
    description: string;
    city: string;
    created_date: string;
    updated_date: string;
  };
  type GetRequest = void;
}
