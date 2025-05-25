export class FinancesMapper {
  static mapCategories(categories: any[]): any[] {
    return categories.map(this.mapCategory);
  }

  static mapCategory(category: any): any {
    return {
      id: category.id,
      name: category.name,
      description: category.description,
    };
  }
}
