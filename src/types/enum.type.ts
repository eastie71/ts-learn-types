enum Material  {
    Wood = "wood",
    Steel = "steel",
    Plastic = "plastic"
}

type KitchenTool = {
    name: string,
    description?: string,
    value?: number,
    material: Material
}

let mySpoon: KitchenTool = {
    name: "Wooden Spoon",
    material: Material.Wood
}