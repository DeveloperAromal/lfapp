export default function Notifications(){
    return(
        <section>
          <div className="p-6">
            <h2 className="text-3xl mb-4">Notifications</h2>
            <div className="bg-white shadow-lg rounded p-4 mb-4">
              <h3 className="text-xl mb-2">New Message from Mr. Smith</h3>
              <p className="font-serif">
                You have received a new message regarding your recent assignment
                submission.
              </p>
              <p className="text-sm text-gray-600">May 15, 2024, 10:00 AM</p>
            </div>
            <div className="bg-white shadow-lg rounded p-4 mb-4">
              <h3 className="text-xl mb-2">Assignment Feedback Available</h3>
              <p className="font-serif">
                Your feedback for Assignment 3 is now available. Please check
                the assignments section.
              </p>
              <p className="text-sm text-gray-600">May 14, 2024, 3:00 PM</p>
            </div>
            <div className="bg-white shadow-lg rounded p-4 mb-4">
              <h3 className="text-xl mb-2">Upcoming Parent-Teacher Meeting</h3>
              <p className="font-serif">
                A parent-teacher meeting is scheduled for May 20, 2024. Please
                mark your calendar.
              </p>
              <p className="text-sm text-gray-600">May 13, 2024, 9:00 AM</p>
            </div>
            <div className="bg-white shadow-lg rounded p-4 mb-4">
              <h3 className="text-xl mb-2">New Course Material Added</h3>
              <p className="font-serif">
                New course material for Mathematics has been added. Please
                review the materials before the next class.
              </p>
              <p className="text-sm text-gray-600">May 12, 2024, 2:00 PM</p>
            </div>
          </div>
        </section>
    );
}