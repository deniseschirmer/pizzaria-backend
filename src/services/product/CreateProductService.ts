import prismaClient from "../../prisma"; //para podermos acessar o banco de dados
interface ProductRequest {
  name: string;
  price: string;
  description: string;
  banner: string;
  category_id: string;
}
class CreateProductService {
  async execute({ name, price, description, banner, category_id }) {
    return { ok: true };
  }
}

export { CreateProductService };
