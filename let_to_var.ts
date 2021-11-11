import { parse } from "@babel/parser"
import  traverse  from "@babel/traverse"
import  generate  from "@babel/generator"

const code = `let a = 'let'; let b = 2`
const ast = parse(code, { sourceType: 'module'})
// 只有断点的时候才能看到
//console.log('ast', ast)

traverse(ast, {
    enter: item =>{
        if (item.node.type === 'VariableDeclaration'){
            if(item.node.kind === 'let'){
                item.node.kind = 'var'
            }
        }
    }
})

const result = generate(ast, {}, code)
console.log(result.code)