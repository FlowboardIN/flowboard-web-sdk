const TOKEN = "JWT_CUSTOMER_INIT_TOKEN"

const steps = [
  { type: "welcome" },
  { type: "stepsIntro" },
  {
    type: "phoneVerify",
    options: {
      consent: `You agree to  <a href="https://example.com">terms and conditions</a>`,
    },
  },
  {
    type: "telecomInfo",
    options: {
      consent: `These are correct, please go ahead to check my bureau score I allow you to do so`,
    },
  },
  {
    type: "creditScore",
    options: {
      inEligibleScore: [{ type: "complete", options: { status: "decline" } }],
      noCreditScore: [
        { type: "creditScoreAdditionalInfo" },
        // { type: "complete", options: { status: "accept" } },
      ],
    },
  },
  { type: "itrIntro" },
  {
    type: "itrPull",
    options: {
      consent: `You agree to  <a href="https://example.com">terms and conditions</a>`,
    },
  },
  { type: "aadhaarIntro" },
  {
    type: "offlineAadhaarPull",
    options: {
      consent: `You agree to  <a href="https://example.com">terms and condition</a>`,
      terms: `You agree to  <a href="https://example.com">terms and condition</a>`,
    },
  },
  {
    type: "applicationForm",
    consent: `You agree to  <a href="https://example.com">terms and condition</a>`,
  },
  { type: "complete", options: { status: "waitlist" } },
];
  
const userDetails= {
  mobile_number: '+911234567890',
  full_name : "John Doe",
  email : "johndoe@example.com",
  pan_number : "ABCDE1234F",
  father_name : "Lorem Ipsum",
  mother_name : "Sit Dor amit",
  aadhaar_number : "123456789123",
  gender : "M"
}
  
  const eligibilityConfigs = {
    eligibleCreditScore: 700,
  };
  
  const enterpriseFeatures = {
    hideFlowBoardLogo: true,
    cobrand: {
      text: "ABCD Company"
    },
  };
  
  const language = {
    locale: "en",
    phrases: { "welcome.title": "Welcome to ABCD Inc." },
  };
  
  const settings = {
    steps,
    // userDetails,
    eligibilityConfigs,
    enterpriseFeatures,
    onComplete,
    fetchCreditScore,
    onError,
    language,
    token:TOKEN,
  };
  
  function fetchCreditScore(data, callback) {
    console.log("User Data:", data);
    setTimeout(() => callback(900), 5000); // Pass credit score in callback function
  }
  
  function onComplete() {
    console.log("Onboarding Complete");
  }
  
  function onError(error) {
    console.error("Error Occurred", error);
  }
  
  window.flowBoard.init({
    ...settings,
  });
  