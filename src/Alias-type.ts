type  Alias1 = string | string[] | null;

//Using intersection and alias types
type Alias2 = { a: number} & { b: number };

//Using generics
type Alias3<T> = T[];

//For shaping objects is better to use interfaces
type Alias4 = {
    a: number;
    b: number;
}