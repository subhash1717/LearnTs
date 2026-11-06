// ============================================================================
// LECTURE: TYPE NARROWING & TYPE GUARDS IN TYPESCRIPT
// ============================================================================
// 💡 WHAT IS TYPE NARROWING?
// Jab kisi variable ke paas ek se zyada possible types hote hain (e.g. string | number),
// tab TypeScript ko pakka pata nahi hota ki runtime pe kaunsa type aayega.
// "Narrowing" ka matlab hai: Code me conditional checks (if/else, switch, etc.) lagana
// taaki TypeScript broader type se specific type tak "narrow down" (filter) kar sake.
// Once narrowed, TypeScript unlocks all properties & methods of that specific type!
// ============================================================================


// ----------------------------------------------------------------------------
// 1. `typeof` TYPE GUARDS (Primitive Values)
// ----------------------------------------------------------------------------
// - `typeof` operator JavaScript ka built-in operator hai jo runtime pe type check karta hai.
// - Works for primitives: "string", "number", "boolean", "symbol", "bigint", "undefined", "object", "function".
//
// 🎯 How it works here:
// `kind` parameter can be `string` OR `number`.
// - Inside `if (typeof kind === 'string')`: TypeScript knows `kind` is 100% a `string`.
//   (You can safely do string methods like `kind.toUpperCase()`).
// - Below the `if` block: TS automatically knows if it wasn't a string, it MUST be a `number`.
function getChai(kind: string | number) {
    if (typeof kind === 'string') {
        // TypeScript narrows 'kind' to type: string
        return `Making ${kind} chai...`
    }
    // TypeScript narrows 'kind' to type: number
    return `Chai order: ${kind}`
}


// ----------------------------------------------------------------------------
// 2. TRUTHINESS NARROWING (Checking for existence)
// ----------------------------------------------------------------------------
// - `msg?: string` means `msg` is optional -> Type is: `string | undefined`.
// - In JavaScript, falsy values are: `false`, `0`, `""`, `null`, `undefined`, and `NaN`.
//
// 🎯 How it works here:
// - `if (msg)` checks if `msg` is truthy (not undefined and not empty "").
// - Inside the `if` block: TypeScript removes `undefined` from `string | undefined`.
// - If no argument is passed (or empty string ""), it falls back to the default return.
function serveChai(msg?: string) {
    if (msg) {
        // TypeScript narrows 'msg' to type: string (guaranteed not undefined)
        return `Serving ${msg}`
    }
    return `Serving default masala chai`
}


// ----------------------------------------------------------------------------
// 3. EQUALITY NARROWING & LITERAL TYPES
// ----------------------------------------------------------------------------
// - Strict equality (`===` or `!==`) also acts as a type guard.
// - `size` is a union of literal types ('small' | 'medium' | 'large') OR `number`.
//
// 🎯 How it works here:
// - Step 1: `size === 'small'` -> handles 'small'.
// - Step 2: `size === 'medium' || size === 'large'` -> handles 'medium' and 'large'.
// - Step 3: By elimination, the remaining possible type for `size` can ONLY be `number`!
function orderChai(size: 'small' | 'medium' | 'large' | number) {
    if (size === 'small') {
        return 'small cutting chai...'
    }
    if (size === 'medium' || size === 'large') {
        return `make extra chai`
    }

    // TypeScript knows all string literals are eliminated, so here size is: number
    return `chai order #${size}`
}


// ----------------------------------------------------------------------------
// 4. `instanceof` TYPE GUARD (Classes & Objects)
// ----------------------------------------------------------------------------
// - `typeof` cannot differentiate between custom classes (both return "object").
// - `instanceof` checks the prototype chain at runtime to verify if an object was
//   instantiated from a specific class constructor (`new KulhadChai()`).
//
// 🎯 How it works here:
// - `chai` can be an instance of `KulhadChai` OR `cuttingChai`.
// - `chai instanceof KulhadChai` confirms it belongs to `KulhadChai`.
class KulhadChai {
    serve() {
        return `serving kulhad chai`
    }
}

class cuttingChai {
    serve() {
        return `serving cutting chai`
    }
}

function serve(chai: KulhadChai | cuttingChai) {
    if (chai instanceof KulhadChai) {
        // TypeScript narrows 'chai' to: KulhadChai
        return chai.serve();
    }
    // TypeScript narrows 'chai' to: cuttingChai
    return chai.serve();
}


// ----------------------------------------------------------------------------
// 5. CUSTOM TYPE PREDICATE / USER-DEFINED TYPE GUARD (`parameter is Type`)
// ----------------------------------------------------------------------------
// - Regular functions return a simple `boolean` (true/false).
// - BUT TypeScript doesn't know that returning `true` means the variable matches a custom type.
// - Solution: Return type `obj is chaiOrder` (Type Predicate).
// - When this function returns `true`, TypeScript officially treats `obj` as `chaiOrder`!
type chaiOrder = {
    type: string
    sugar: number
}

// Type guard function: checks the runtime shape of `obj`
function isChaiOrder(obj: any): obj is chaiOrder {
    return (
        typeof obj === "object" &&     // 1. Must be an object
        obj !== null &&                // 2. In JS, typeof null is also "object", so filter null out
        typeof obj.type === 'string' &&// 3. Must contain 'type' property of type string
        typeof obj.sugar === 'number'  // 4. Must contain 'sugar' property of type number
    )
}

function serveOrder(item: chaiOrder | string) {
    if (isChaiOrder(item)) {
        // Inside this block: TypeScript knows 'item' is definitely `chaiOrder`!
        // We get full autocomplete for `item.type` and `item.sugar`.
        return `serving ${item.type} chai with ${item.sugar} sugar`
    }
    // Outside the block: TypeScript knows 'item' is a `string`
    return `Serving custom chai: ${item}`
}


// ----------------------------------------------------------------------------
// 6. DISCRIMINATED UNIONS (Tagged Unions) & `in` OPERATOR NARROWING
// ----------------------------------------------------------------------------
// - "Discriminated Union": Jab multiple types me ek common property hoti hai
//   (yahan par `type: "masala" | "ginger" | "elaichi"`) jise "discriminant" kehte hain.
// - TypeScript uses this common property to instantly narrow the type inside `switch` or `if`.
type MasalaChai = { type: "masala"; spicelevel: number };
type GingerChai = { type: "ginger"; amount: number };
type ElachiChai = { type: "elaichi"; aroma: number };

type Chai = MasalaChai | GingerChai | ElachiChai

function MakeChai(order: Chai) {
    // Discriminated union matching using `switch` on the common 'type' tag
    switch (order.type) {
        case "masala":
            // TypeScript knows 'order' is MasalaChai -> 'spicelevel' is available!
            return `masala chai with spice level ${order.spicelevel}`
        case "elaichi":
            // TypeScript knows 'order' is ElachiChai -> 'aroma' is available!
            return `elaichi chai with aroma ${order.aroma}`
        case "ginger":
            // TypeScript knows 'order' is GingerChai -> 'amount' is available!
            return `ginger chai with ginger amount ${order.amount}`
    }

    // ------------------------------------------------------------------------
    // 7. THE `in` OPERATOR TYPE GUARD
    // ------------------------------------------------------------------------
    // - Checks if a specific property exists on an object at runtime.
    // - `"spicelevel" in order` checks if the 'spicelevel' key exists.
    // - Since only `MasalaChai` has 'spicelevel', TypeScript narrows `order` to `MasalaChai`!
    function brew(order: MasalaChai | GingerChai) {
        if ("spicelevel" in order) {
            // TypeScript narrows 'order' to MasalaChai
            return `Brewing masala chai with spice level: ${order.spicelevel}`
        } else {
            // TypeScript narrows 'order' to GingerChai
            return `Brewing ginger chai with ginger amount: ${order.amount}`
        }
    }
}


// ----------------------------------------------------------------------------
// 8. TYPE GUARD WITH `unknown` & ARRAYS
// ----------------------------------------------------------------------------
// - `unknown` is the type-safe counterpart of `any`.
// - You CANNOT access properties or call methods on `unknown` until you prove its type first.
// - `arr is string[]`: Custom type predicate telling TS that this array contains only strings.
function isStringArray(arr: unknown): arr is string[] {
    // 1. Array.isArray(arr) ensures it's actually an array (narrows `unknown` to `any[]`).
    // 2. .every(...) verifies that every single element in the array is of type 'string'.
    return Array.isArray(arr) && arr.every((item) => typeof item === "string");
}
