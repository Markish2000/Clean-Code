type Size = '' | 'S' | 'M' | 'XL';

class Product {
  constructor(
    public name: string = '',
    public price: number = 0,
    public size: Size = ''
  ) {}

  private isProductReady(): boolean {
    for (const key in this) {
      switch (typeof this[key]) {
        case 'string':
          if ((<string>this[key]).length <= 0) {
            throw new Error(`${key} is empty.`);
          }
          break;

        case 'number':
          if (<number>this[key] <= 0) throw new Error(`${key} is empty.`);
          break;

        default:
          throw new Error(`${typeof this[key]} isn't supported.`);
      }
    }

    return true;
  }

  public toString(): string | undefined {
    if (!this.isProductReady) return;

    const text = `${this.name} (${this.price}), ${this.size}`;
    return text;
  }
}

(() => {
  const bluePants = new Product('Blue Large Pants', 10, 'M');
  console.log(bluePants.toString());
})();
