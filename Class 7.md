# Class 7



&#x20; {

&#x20;   name: {

&#x20;     type: String,

&#x20;     required: \[true, "Kindly fill the Name!"],

&#x20;     minLength: \[3, "Name must be atleast of length 3"],

&#x20;     maxLength: \[50, "Name cannot exceed 50 characters!"],

&#x20;   },

&#x20;   age: {

&#x20;     type: Number,

&#x20;     required: \[true, "Kindly fill the Age!"],

&#x20;     min: \[18, "Kindly give the age between 18 to 70"],

&#x20;     max: \[70, "Age cannot exceed 70!"],

&#x20;   },

