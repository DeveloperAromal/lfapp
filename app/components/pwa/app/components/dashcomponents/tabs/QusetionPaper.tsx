// import React, { useState } from 'react';

// export default function QuestionPaper() {
//   const [formData, setFormData] = useState({
//     title: '',
//     mark: '',
//     time: '',
//     subject: 'English',
//     questionSections: [], // Adjusted to hold sections of questions
//     newSectionTitle: '', // For the title of new question sections
//     newQuestion: '',
//     questionType: 'match the following',
//     matchItem1: '',
//     matchItem2: '',
//     matchItems: [],
//     mcQuestion: '',
//     mcOptions: ['', '', '', ''], // Adjusted to hold four options
//     bracketText: '',
//     bracketInput: '',
//     bracketItems: [],
//   });

//   const handleChange = (e) => {
//     const { id, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [id]: value,
//     }));
//   };

//   const addQuestion = () => {
//     if (formData.newQuestion.trim() !== '') {
//       const updatedSections = formData.questionSections.map(section => {
//         if (section.title === formData.newSectionTitle) {
//           return {
//             ...section,
//             questions: [...section.questions, { type: formData.questionType, text: formData.newQuestion }],
//           };
//         }
//         return section;
//       });
//       setFormData((prevData) => ({
//         ...prevData,
//         questionSections: updatedSections,
//         newQuestion: '',
//       }));
//     }
//   };

//   const addSection = () => {
//     if (formData.newSectionTitle.trim() !== '') {
//       setFormData((prevData) => ({
//         ...prevData,
//         questionSections: [...prevData.questionSections, { title: prevData.newSectionTitle, questions: [] }],
//         newSectionTitle: '',
//       }));
//     }
//   };

//   const addMatchItem = () => {
//     if (formData.matchItem1.trim() !== '' && formData.matchItem2.trim() !== '') {
//       setFormData((prevData) => ({
//         ...prevData,
//         matchItems: [...prevData.matchItems, { item1: prevData.matchItem1, item2: prevData.matchItem2 }],
//         matchItem1: '',
//         matchItem2: '',
//       }));
//     }
//   };

//   const addBracketItem = () => {
//     if (formData.bracketInput.trim() !== '') {
//       setFormData((prevData) => ({
//         ...prevData,
//         bracketItems: [...prevData.bracketItems, formData.bracketInput],
//         bracketInput: '',
//       }));
//     }
//   };

//   return (
//     <section className="min-h-screen flex flex-col justify-center items-center py-8">
//       <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6 mb-8">
//         <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
//           Add basic details about your question paper
//         </h1>
//         <form className="space-y-4">
//           <div>
//             <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
//               Title
//             </label>
//             <input
//               type="text"
//               id="title"
//               className="block w-full border border-gray-300 rounded-md shadow-sm p-2"
//               placeholder="Enter the title"
//               value={formData.title}
//               onChange={handleChange}
//             />
//           </div>
//           <div>
//             <label htmlFor="mark" className="block text-sm font-medium text-gray-700 mb-1">
//               Total Marks
//             </label>
//             <input
//               type="tel"
//               id="mark"
//               className="block w-full border border-gray-300 rounded-md shadow-sm p-2"
//               placeholder="Enter total marks"
//               value={formData.mark}
//               onChange={handleChange}
//             />
//           </div>
//           <div>
//             <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">
//               Time (minutes)
//             </label>
//             <input
//               type="tel"
//               id="time"
//               className="block w-full border border-gray-300 rounded-md shadow-sm p-2"
//               placeholder="Enter time in minutes"
//               value={formData.time}
//               onChange={handleChange}
//             />
//           </div>
//           <div>
//             <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
//               Subject
//             </label>
//             <select
//               id="subject"
//               className="block w-full border border-gray-300 rounded-md shadow-sm p-2"
//               value={formData.subject}
//               onChange={handleChange}
//             >
//               <option value="English">English</option>
//               <option value="Math">Math</option>
//               <option value="Science">Science</option>
//             </select>
//           </div>
//           <div>
//             <label htmlFor="newSectionTitle" className="block text-sm font-medium text-gray-700 mb-1">
//               Question Section Title
//             </label>
//             <input
//               type="text"
//               id="newSectionTitle"
//               className="block w-full border border-gray-300 rounded-md shadow-sm p-2"
//               placeholder="Enter question section title"
//               value={formData.newSectionTitle}
//               onChange={handleChange}
//             />
//             <button
//               type="button"
//               className="bg-indigo-500 text-white px-4 py-2 rounded-md mt-2"
//               onClick={addSection}
//             >
//               Add Section
//             </button>
//           </div>
//           <div>
//             <label htmlFor="questionType" className="block text-sm font-medium text-gray-700 mb-1">
//               Type of question
//             </label>
//             <select
//               id="questionType"
//               className="block w-full border border-gray-300 rounded-md shadow-sm p-2"
//               value={formData.questionType}
//               onChange={handleChange}
//             >
//               <option value="match the following">Match the Following</option>
//               <option value="choose from bracket">Choose from Bracket</option>
//               <option value="multiple choice">Multiple Choice</option>
//             </select>
//           </div>
//           {formData.questionType === 'match the following' && (
//             <div>
//               <div>
//                 <label htmlFor="matchItem1" className="block text-sm font-medium text-gray-700 mb-1">
//                   Item 1
//                 </label>
//                 <input
//                   type="text"
//                   id="matchItem1"
//                   className="block w-full border border-gray-300 rounded-md shadow-sm p-2"
//                   placeholder="Enter item 1"
//                   value={formData.matchItem1}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div>
//                 <label htmlFor="matchItem2" className="block text-sm font-medium text-gray-700 mb-1">
//                   Item 2
//                 </label>
//                 <input
//                   type="text"
//                   id="matchItem2"
//                   className="block w-full border border-gray-300 rounded-md shadow-sm p-2"
//                   placeholder="Enter item 2"
//                   value={formData.matchItem2}
//                   onChange={handleChange}
//                 />
//               </div>
//               <button
//                 type="button"
//                 className="bg-indigo-500 text-white px-4 py-2 rounded-md mt-2"
//                 onClick={addMatchItem}
//               >
//                 Add Match
//               </button>
//               <ul className="list-disc pl-6 mt-2">
//                 {formData.matchItems.map((item, index) => (
//                   <li key={index}>
//                     {item.item1} - {item.item2}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )}
//           {formData.questionType === 'multiple choice' && (
//             <div>
//               <div>
//                 <label htmlFor="mcQuestion" className="block text-sm font-medium text-gray-700 mb-1">
//                   Question
//                 </label>
//                 <input
//                   type="text"
//                   id="newQuestion"
//                   className="block w-full border border-gray-300 rounded-md shadow-sm p-2"
//                   placeholder="Enter question"
//                   value={formData.newQuestion}
//                   onChange={handleChange}
//                 />
//               </div>
//               {formData.mcOptions.map((option, index) => (
//                 <div key={index}>
//                   <label htmlFor={`mcOption${index + 1}`} className="block text-sm font-medium text-gray-700 mb-1">
//                     Option {index + 1}
//                   </label>
//                   <input
//                     type="text"
//                     id={`mcOption${index + 1}`}
//                     className="block w-full border border-gray-300 rounded-md shadow-sm p-2"
//                     placeholder={`Enter option ${index + 1}`}
//                     value={option}
//                     onChange={(e) => {
//                       const updatedOptions = [...formData.mcOptions];
//                       updatedOptions[index] = e.target.value;
//                       setFormData((prevData) => ({
//                         ...prevData,
//                         mcOptions: updatedOptions,
//                       }));
//                     }}
//                   />
//                 </div>
//               ))}
//               <button
//                 type="button"
//                 className="bg-indigo-500 text-white px-4 py-2 rounded-md mt-2"
//                 onClick={addQuestion}
//               >
//                 Add Question
//               </button>
//             </div>
//           )}
//           {formData.questionType === 'choose from bracket' && (
//             <div>
//               <div>
//                 <label htmlFor="bracketText" className="block text-sm font-medium text-gray-700 mb-1">
//                   Question
//                 </label>
//                 <textarea
//                   id="bracketText"
//                   className="block w-full border border-gray-300 rounded-md shadow-sm p-2"
//                   placeholder="Enter question"
//                   value={formData.bracketText}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className='flex gap-2'>
//                 <input
//                   type="text"
//                   id="bracketInput"
//                   className="block w-full border border-gray-300 rounded-md shadow-sm p-2"
//                   placeholder="Add bracket"
//                   value={formData.bracketInput}
//                   onChange={handleChange}
//                 />
//                 <button
//                   type="button"
//                   className="bg-indigo-500 text-white px-4 py-2 rounded-md mt-2"
//                   onClick={addBracketItem}
//                 >
//                   Add to bracket
//                 </button>
//               </div>
//               <ul className="list-disc pl-6 mt-2">
//                 {formData.bracketItems.map((item, index) => (
//                   <li key={index}>{item}</li>
//                 ))}
//               </ul>
//             </div>
//           )}
//         </form>
//       </div>
//       <main className="w-full max-w-md bg-white shadow-md rounded-lg p-6 overflow-x-scroll">
//         <h1 className="text-xl font-bold text-gray-800 mb-4">Preview</h1>
//         <div className="space-y-4">
//           {formData.questionSections.map((section, index) => (
//             <div key={index} className="border-b border-gray-300 pb-4">
//               <h2 className="text-lg font-semibold">{section.title}</h2>
//               <ul className="list-disc pl-6 mt-2">
//                 {section.questions.map((question, index) => (
//                   <li key={index} className="text-sm">{question.text}</li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       </main>
//     </section>
//   );
// }
