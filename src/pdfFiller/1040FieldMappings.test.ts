import rewire from "rewire"
const _1040FieldMappings = rewire("./1040FieldMappings")
const depField = _1040FieldMappings.__get__("depField")
const depFields = _1040FieldMappings.__get__("depFields")
// @ponicode
describe("depField", () => {
    test("0", () => {
        depField(undefined, undefined)
    })
})

// @ponicode
describe("depFields", () => {
    test("0", () => {
        depFields({ taxPayer: { dependents: true } }, 2)
    })

    test("1", () => {
        depFields({}, "")
    })

    test("2", () => {
        depFields({ taxPayer: { dependents: true } }, 0)
    })
})
