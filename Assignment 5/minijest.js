class TestRunner {
    constructor() {
      this.tests = [];
      this.executionOrder = 'sequential'; // default order
    }
  
    // Register a new test
    registerTest(name, testFunction) {
      this.tests.push({ name, testFunction });
    }
  
    // Set execution order (sequential or reverse)
    setExecutionOrder(order) {
      this.executionOrder = order;
    }
  
    // Run all registered tests
    runTests() {
      console.log('Running Tests...');
      const testsToRun = [...this.tests];
  
      if (this.executionOrder === 'reverse') {
        testsToRun.reverse();
      }
  
      testsToRun.forEach(({ name, testFunction }) => {
        try {
          testFunction();
          console.log(`✅ Test Passed: ${name}`);
        } catch (error) {
          console.error(`❌ Test Failed: ${name}`);
          console.error(`   Error: ${error.message}`);
        }
      });
    }
  
    // Filter tests by name (or tag if needed)
    filterTests(filter) {
      this.tests = this.tests.filter(test => test.name.includes(filter));
    }
  }

  const Assertions = {
    assertEqual(actual, expected, message = '') {
      if (actual !== expected) {
        throw new Error(message || `Expected ${expected}, but got ${actual}`);
      }
    },
  
    assertNotEqual(actual, expected, message = '') {
      if (actual === expected) {
        throw new Error(message || `Expected not ${expected}, but got ${actual}`);
      }
    },
  
    assertTrue(value, message = '') {
      if (!value) {
        throw new Error(message || `Expected true, but got ${value}`);
      }
    },
  
    assertFalse(value, message = '') {
      if (value) {
        throw new Error(message || `Expected false, but got ${value}`);
      }
    },
  
    assertContains(array, item, message = '') {
      if (!array.includes(item)) {
        throw new Error(message || `Expected array to contain ${item}`);
      }
    }
  };

  function describe(suiteName, suiteFunction) {
    console.log(`Suite: ${suiteName}`);
    suiteFunction();
  }
  
  function it(testName, testFunction) {
    testRunner.registerTest(testName, testFunction);
  }
  const testRunner = new TestRunner();

describe('Basic Arithmetic Tests', () => {
  it('should add two numbers correctly', () => {
    Assertions.assertEqual(1 + 1, 2, '1 + 1 should equal 2');
  });

  it('should subtract two numbers correctly', () => {
    Assertions.assertEqual(5 - 3, 2, '5 - 3 should equal 2');
  });
});

describe('Array Tests', () => {
  it('should contain an item in an array', () => {
    const arr = [1, 2, 3];
    Assertions.assertContains(arr, 2, 'Array should contain 2');
  });

  it('should throw an error for missing item in array', () => {
    const arr = [1, 2, 3];
    Assertions.assertContains(arr, 5, 'Array should contain 5');
  });
});

// Set order and run tests
testRunner.setExecutionOrder('sequential'); // or 'reverse'
testRunner.runTests();
  
  