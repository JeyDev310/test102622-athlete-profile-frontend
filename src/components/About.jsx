const locations = [
  'United States', 'United Kingdom'
]
const About = ({ setStep, about, setAbout, location, setLocation, team, setTeam }) => {
  return (<>
    <div className="w-[80%]">
      <div className="">
        <div className="px-4 sm:px-0">
          <h3 className="text-lg font-medium leading-6 text-gray-900">About</h3>
        </div>
      </div>

      <div className="mt-5">
        <form>
          <div className="overflow-hidden shadow sm:rounded-md">
            <div className="bg-white px-4 py-5 sm:p-6">
              <div className="grid grid-cols-6 gap-8">
                <div className="col-span-6 sm:col-span-12">
                  <label className="block text-sm font-medium text-gray-700">Descriptoin</label>
                  <input
                    type="text" name="about" id="about" className="px-3 h-9 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    value={about}
                    onChange={(e) => setAbout(e.target.value)}
                  />
                </div>

                <div className="col-span-6 sm:col-span-12">
                  <label className="block text-sm font-medium text-gray-700">Location</label>
                  <select
                    id="location" name="location" className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  >
                    {locations.map((item) => <option key={item} value={item}>{item}</option>)}
                  </select>
                </div>

                <div className="col-span-6 sm:col-span-12">
                  <label className="block text-sm font-medium text-gray-700">Team</label>
                  <input
                    type="text" name="team" id="team" className="px-3 h-9 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    value={team}
                    onChange={(e) => setTeam(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:px-6 flex justify-between">
              <button className="inline-flex justify-center rounded-md border border-transparent bg-red-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                onClick={() => setStep(0)}
              >
                Back
              </button>
              <button className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                onClick={() => setStep(2)}
                disabled={team === "" || about === ""}
              >
                Next
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </>)
}

export default About;