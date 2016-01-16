describe("hello", function () {
    it("should work", function () {
        expect(true).toBe(true);
    })

    var jasmine = getJasmineRequireObj().core(jasmineRequire);
    env = jasmine.getEnv();

    env.describe('one', function(){
        env.describe('nested', function(){
            env.it('should do something', function(){});
        });
    });

});