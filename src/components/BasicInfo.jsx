import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const sportslist = [
  "Golf", "Tennis", "Cricket", "Basketball", "Baseball", "American Football",
  "Aquatics", "Archery", "Automobile Racing", "Badminton", "Beach Volleyball",
  "Bobsleigh", "Body Building", "Boxing", "Cross Country Running", "Cross Country Skiing",
  "Curling", "Cycling", "Darts", "Decathlon", "Down Hill Skiing", "Equestrianism", "eSports",
  "Fencing", "Field Hockey", "Figure Skating", "Gymnastics", "Ice Hockey", "Martial Arts", "Mixed Martial Arts",
  "Modern Pentathlon", "Motorcycle Racing", "Netball", "Polo", "Racquetball", "Rowing", "Rugby", "Sailing", "Softball",
  "Shooting", "Skateboarding", "Skeet Shooting", "Skeleton", "Snow Boarding", "Soccer (Football)", "Squash", "Surfing", "Swimming", "Track and Field"
];

const BasicInfo = ({ setStep, name, setName, sports, setSports, gender, setGender, birthday, setBirthday }) => {
  const toggle = (item) => {
    let _sports = [];
    if (sports.length === 0) {
      setSports([item])
    } else {
      for (let i = 0; i < sports.length; i++) {
        if (sports[i] !== item) {
          _sports.push(sports[i])
        }
      }
      if (_sports.length === sports.length) {
        _sports.push(item);
      }
      setSports(_sports);
    }
  }
  return (
    <>
      <div className="w-[80%]">
        <div className="">
          <div className="px-4 sm:px-0">
            <h3 className="text-lg font-medium leading-6 text-gray-900">Basic Information</h3>
          </div>
        </div>

        <div className="mt-5">
          <form>
            <div className="overflow-hidden shadow sm:rounded-md">
              <div className="bg-white px-4 py-5 sm:p-6">
                <div className="grid grid-cols-6 gap-8">
                  <div className="col-span-6 sm:col-span-3">
                    <label className="block text-sm font-medium text-gray-700">Name</label>
                    <input
                      type="text" name="name" id="name" className="px-3 h-9 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-2">
                    <label className="block text-sm font-medium text-gray-700">Gender</label>
                    <select
                      id="gender" name="gender" className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>
                  <div className="col-span-6 sm:col-span-2">
                    <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
                    <DatePicker selected={birthday} onChange={(date) => setBirthday(date)} className='h-9 mt-[5px] border-[1px] rounded-md px-3' />
                  </div>

                  <div className="col-span-6 sm:col-span-12">
                    <label className="block text-sm font-medium text-gray-700">Sport</label>
                    <fieldset className="mt-4">
                      <legend className="sr-only">Choose a size</legend>
                      <div className="grid grid-cols-9 gap-4">
                        {sportslist.map((item) =>
                          <label 
                            key={item} className={`text-center group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 bg-white shadow-sm text-gray-900 cursor-pointer ${sports.includes(item) ? " border-indigo-500" : ""}`}
                            onClick={() => toggle(item)}
                          >
                            <span id="size-choice-0-label">{item}</span>
                            <span className="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                          </label>)}
                      </div>
                    </fieldset>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                <button className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  disabled={name === "" || sports.length === 0}
                  onClick={() => { setStep(1) }}
                >
                  Next
                </button>
              </div>
            </div>
          </form>
        </div >
      </div >
    </>
  )
}

export default BasicInfo;