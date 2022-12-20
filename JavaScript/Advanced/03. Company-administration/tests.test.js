let {companyAdministration} = require('./companyAdministration');
let {assert} = require('chai');

describe('Tests for hiringEmployee()', ()=>{
    let name = 'Dobri';
    let text;
    let position;
    let yearsExperience;
    it('test with correct pos and exp bigger than 3', ()=>{
        position = 'Programmer';
        yearsExperience = 20;
        text = `${name} was successfully hired for the position ${position}.`;
        assert.equal(companyAdministration.hiringEmployee(name, position, yearsExperience), text)
    });
    it('test with correct pos and exp equal to 3', ()=>{
        position = 'Programmer';
        yearsExperience = 3;
        text = `${name} was successfully hired for the position ${position}.`;
        assert.equal(companyAdministration.hiringEmployee(name, position, yearsExperience), text)
    });
    it('test with correct pos and exp smaller than 3', ()=> {
        position = 'Programmer';
        yearsExperience = 2;
        text = `${name} is not approved for this position.`;
        assert.equal(companyAdministration.hiringEmployee(name, position, yearsExperience), text);
    });
   it('test with wrong pos',()=>{
       position = 'QA';
       yearsExperience = 4;
       text = `We are not looking for workers for this position.`;
       assert.throw(()=> companyAdministration.hiringEmployee(name, position, yearsExperience),text );
   });
});

describe('Tests for calculateSalary()', ()=> {
    let text;
    it('hours are not valid type example string',()=>{
    text =  "Invalid hours";
    assert.throw(()=>companyAdministration.calculateSalary('seven'), text);
    });
    it('hours are negative number',()=>{
        text =  "Invalid hours";
        assert.throw(()=>companyAdministration.calculateSalary(-4), text);
        });
    it('hours are more than 160 test with 161', ()=> {
        assert.equal(companyAdministration.calculateSalary(161), 3415);
    });
    it('hours are 160 , result should be 2400', ()=> {
        assert.equal(companyAdministration.calculateSalary(160), 2400);
    });
    it('hours are 0 , result should be 0', ()=> {
        assert.equal(companyAdministration.calculateSalary(0), 0);
    });
});
describe('Tests for firedEmployee()', ()=> {
    let text = "Invalid input";
    it('first input is not an array',()=>{
        assert.throw(()=>companyAdministration.firedEmployee('string', 3), text);
    });
    it('first input is correct, second one is not valid index',()=>{
        assert.throw(()=>companyAdministration.firedEmployee('["Dobri", "Boyka"]', -1), text);
    });
    it('first input is correct, second one is not valid index',()=>{
        assert.throw(()=>companyAdministration.firedEmployee('["Dobri", "Boyka"]', 5), text);
    });
    it('first input is correct, second one is wrong type',()=>{
        assert.throw(()=>companyAdministration.firedEmployee('["Dobri", "Boyka"]', '1'), text);
    });
    it('invalid inputs',()=>{
        assert.throw(()=>companyAdministration.firedEmployee({}, '1'), text);
        assert.throw(()=>companyAdministration.firedEmployee([], []), text);
        assert.throw(()=>companyAdministration.firedEmployee('sex', 'anal'), text);
        assert.throw(()=>companyAdministration.firedEmployee(3, '1'), text);
    });
    it('correct inputs',()=>{
        let array = ["Dobri", "Boyka", "Pepi", "Alex"];
        let res = "Boyka, Pepi, Alex";
        assert.equal(companyAdministration.firedEmployee(array,0), res);
        array = ["Boyka", "Pepi", "Alex"]
        res = "Boyka, Pepi";
        assert.equal(companyAdministration.firedEmployee(array,2), res);
        array = ["Boyka"];
        res = '';
        assert.equal(companyAdministration.firedEmployee(array,0), res);
    });
});