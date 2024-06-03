class Cohortmanager {
  constructor() {
    this.cohorts = []
    this.id = 1
  }

  create(cName) {
    const newCohort = new Cohort(this.id, cName)
    this.id++
    this.cohorts.push(newCohort)
    return newCohort
  }

  search(cName) {
    const result = this.cohorts.find((c) => c.cName === cName)
    if (result === undefined) {
      return false
    }
    return result
  }
}

class Cohort {
  constructor(id, cName) {
    this.cName = cName
    this.studentsList = []
    this.id = id
  }
}

class Student {
  constructor(id, fName, lName, gitHub, email) {
    this.id = id
    this.fName = fName
    this.lName = lName
    this.gitHub = gitHub
    this.email = email
  }
}
export { Student, Cohortmanager, Cohort }
