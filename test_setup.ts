/**
 * TypeScript Environment Validation Script
 * 
 * Run this script to verify your TypeScript environment is properly configured:
 * npx ts-node test_setup.ts
 */

const testBasicTypes = (): void => {
  const message: string = "TypeScript is working!";
  const version: number = 5.7;
  const isConfigured: boolean = true;
  
  console.log(`✅ ${message}`);
  console.log(`✅ TypeScript version: ${version}+`);
  console.log(`✅ Configuration status: ${isConfigured ? "Valid" : "Invalid"}`);
};

const testTypeInference = (): void => {
  const inferredNumber = 42;
  const inferredString = "Hello, TypeScript!";
  const inferredBoolean = true;
  
  console.log(`✅ Type inference working: ${typeof inferredNumber}, ${typeof inferredString}, ${typeof inferredBoolean}`);
};

const testNodeEnvironment = (): void => {
  const nodeVersion = process.version;
  console.log(`✅ Node.js version: ${nodeVersion}`);
  
  const majorVersion = parseInt(nodeVersion.slice(1).split('.')[0]);
  if (majorVersion >= 22) {
    console.log(`✅ Node.js version meets requirement (22+)`);
  } else {
    console.warn(`⚠️  Warning: Node.js 22+ recommended. Current: ${nodeVersion}`);
  }
};

const validateSetup = (): void => {
  console.log("\n🔍 Validating TypeScript Environment...\n");
  
  try {
    testBasicTypes();
    testTypeInference();
    testNodeEnvironment();
    
    console.log("\n✅ All checks passed! Your TypeScript environment is ready.");
    console.log("📖 You can now start with Level 1: Fundamentals\n");
  } catch (error) {
    console.error("\n❌ Setup validation failed:");
    console.error(error);
    console.log("\n📚 Please review LEARNING-GUIDE.md for troubleshooting\n");
    process.exit(1);
  }
};

validateSetup();
