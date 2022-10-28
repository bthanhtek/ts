/*
1. What are the differences between a class and an interface?

* class
 - Used as a blueprint from which to instantiate/produce objects
 -Can implement an interface which means it has to implement at least all of the properties/methods from the interface

 * interface 
   - An interface is a way to model a shape. Interfaces do not emit JavaScript code, and only exist at compile time.
    -Describe how an object should look
    - cannot be instantiated with key  'new'
    
2. When you mark a class’s constructor as private, that means you can’t instantiate
or extend the class. What happens when you mark it as protected instead? Play
around with this in your code editor, and see if you can figure it out.

    --  When I mark a class’s constructor as protected, I can’t instantiate but I can  extend the class and use it 

    example code : 
class Cat {
  private name : string
  protected constructor(name : string){
    this.name = name
  }

  getName () : string {
    return this.name
  }

}
let b = new Cat("mi") //constructor of class 'Cat' is protected and only accessible within the class declaration.
class loveCat extends Cat{
  constructor(){
    super("mi")
  }
}

let a = new loveCat()
a.getName() //mi

4 . [Hard] As an exercise, think about how you might design a typesafe builder pat‐
tern. Extend the Builder pattern “Builder Pattern” on page 109 to:
    a. Guarantee at compile time that someone can’t call .send before setting at least
        a URL and a method. Would it be easier to make this guarantee if you also
        force the user to call methods in a specific order? (Hint: what can you return
        instead of this?)
    b. [Harder] How would you change your design if you wanted to make this
        guarantee, but still let people call methods in any order? (Hint: what Type‐
        Script feature can you use to make each method’s return type “add” to the
        this type after each method call?)


        a )
        class RequestBuilder {
            private data: object | null = null
            private method: 'get' | 'post' | null = null
            private url: string | null = null

            setMethod(method: 'get' | 'post'): this {
                this.method = method
            return this
            }
            setData(data: object): this {
                this.data = data
                return this
            }
            setURL(url: string): this {
                this.url = url
                return this
            }
            send() {
                try {
                if(this.url === null || this.method === null){ 
                
                    throw new Error('url or method null');
                }else {
                
                    console.log("send")
                }
                }
                catch(e) {
                console.log(e);
                }
                
            
            }

            }
            new RequestBuilder()
            .setURL("/")
            .setMethod("get")
            .setData({firstName: 'Anna'})
            .send()


*/