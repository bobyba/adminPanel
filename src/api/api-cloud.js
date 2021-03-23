import { db } from "../firebase";
import { funcs } from "../firebase";
import firebase from "../firebase.js";

export const apiFirebase = {
  async setDataNewProgram(ProgramData, categories) {
    return await db
      .collection(categories)
      .add(ProgramData, { merge: true })
      .then(function (docRef) {
        return docRef.id;
      });
  },
  async getDataPrograms(categories) {
    let arr = [];
    return await db
      .collection(categories)
      .get()
      .then(function (snap) {
        snap.forEach((doc) => {
          let obj = {
            id: doc.id,
            ...doc.data(),
          };
          arr.push(obj);
        });
      })
      .then(() => arr);
  },
  async updateDataSelectProgram(data, categories, id) {
    db.collection(categories).doc(id).update(data);
  },
  async deleteDataSelectProgram(data, categories, id) {
    db.collection(categories).doc(id).delete();
  },
  /* --------------------------------- */
  async setDataNewTeacher(data) {
    return await db
      .collection("teachers")
      .add(data, { merge: true })
      .then(function (docRef) {
        return docRef.id;
      });
  },
  async updateDataSelectTeacher(data, id) {
    db.collection("teachers").doc(id).update(data);
  },
  async getDataTeachers() {
    let arr = [];
    return await db
      .collection("teachers")
      .get()
      .then(function (snap) {
        snap.forEach((doc) => {
          let obj = {
            id: doc.id,
            ...doc.data(),
          };
          arr.push(obj);
        });
      })
      .then(() => arr);
  },
  async deleteDataSelectTeacher(id) {
    db.collection("teachers").doc(id).delete();
  },
  /* --------------------------------- */
  async setDataNewHull(data) {
    return await db
      .collection("hulls")
      .add(data, { merge: true })
      .then(function (docRef) {
        return docRef.id;
      });
  },
  async getDataHulls() {
    let arr = [];
    return await db
      .collection("hulls")
      .get()
      .then(function (snap) {
        snap.forEach((doc) => {
          let obj = {
            id: doc.id,
            ...doc.data(),
          };
          arr.push(obj);
        });
      })
      .then(() => arr);
  },
  async updateDataSelectHull(data, id) {
    debugger;
    db.collection("hulls").doc(id).update(data);
  },
  async deleteDataSelectHull(id) {
    db.collection("hulls").doc(id).delete();
  },
  /* --------------------------------- */
  async getDataContracts() {
    let arr = [];
    return await db
      .collection("contracts")
      .get()
      .then(function (snap) {
        snap.forEach((doc) => {
          let obj = {
            id: doc.id,
            ...doc.data(),
          };
          arr.push(obj);
        });
      })
      .then(() => arr);
  },
  async setDataNewContract(data) {
    return await db
      .collection("contracts")
      .add(data, { merge: true })
      .then(function (docRef) {
        return docRef.id;
      });
  },
  async updateDataSelectContract(data, id) {
    db.collection("contracts").doc(id).update(data);
  },
  async deleteDataSelectContract(id) {
    db.collection("contracts").doc(id).delete();
  },
  /* --------------------------------- */
  async getDataPatterns() {
    let arr = [];
    return await db
      .collection("patterns")
      .get()
      .then(function (snap) {
        snap.forEach((doc) => {
          let obj = {
            id: doc.id,
            ...doc.data(),
          };
          arr.push(obj);
        });
      })
      .then(() => arr);
  },
  async setDataNewPattern(data) {
    return await db
      .collection("patterns")
      .add(data, { merge: true })
      .then(function (docRef) {
        return docRef.id;
      });
  },
  async updateDataSelectPattern(data, id) {
    db.collection("patterns").doc(id).update(data);
  },
  async deleteDataSelectPattern(id) {
    db.collection("patterns").doc(id).delete();
  },
  /* --------------------------------- */
};

/* import { db } from "../firebase";
import { funcs } from "../firebase";
import firebase from "../firebase.js";

export const apiFirebase = {
  async getDataUser(userId) {
    let dataUser = await db
      .collection("users")
      .doc(userId)
      .get()
      .then(function (doc) {
        return doc.data();
      });
    return dataUser;
  },
  async logoutUser() {
    firebase
      .auth()
      .signOut()
      .then(function (check) {
        return true;
      })
      .catch(function (error) {
        return "bug";
      });
  },
  async setDataNewUser(userId, phone) {
    let isNewUser = await db
      .collection("users")
      .doc(userId)
      .set({
        address: [],
        dataPayments: [],
        historyMovies: [],
        favoritesMovies: [],
        phone: phone,
        allProducts: [],
      })
      .then(function () {
        return true;
      });
    return isNewUser;
  },

  async setUserAddress(addressUser, userId) {
    let isAddressUser = await db
      .collection("users")
      .doc(userId)
      .set(
        {
          address: addressUser,
        },
        { merge: true }
      )
      .then(function () {
        return true;
      });
    return isAddressUser;
  },
  async checkOutYandex(idem, count) {
    let checkOutYandex = await funcs.httpsCallable("checkOutYandex")({
      data: { idem: idem, count: count },
    });
    return checkOutYandex;
  },

  async getIdPayment(userId) {
    let dataUser = await db
      .collection("users")
      .doc(userId)
      .get()
      .then(function (doc) {
        return doc.data();
      });

    if (dataUser.dataPayments.length === 0) {
      dataUser.dataPayments.push({ id: `${userId}_1` });
    }

    let lastPayment = dataUser.dataPayments[dataUser.dataPayments.length - 1];

    let idPayment = lastPayment.id + 1;
    dataUser.dataPayments.push({ id: idPayment });
    let dataPayments = dataUser.dataPayments;

    db.collection("users")
      .doc(userId)
      .set({ dataPayments: dataPayments }, { merge: true });

    idPayment = String(idPayment);

    return idPayment;
  },

  async pushFilm(filmData, filmId) {
    let response = await db.collection("serials").doc(filmId).set(filmData);
  },
  async pushPosters(posters) {
    db.collection("posters").doc("firstpage").set({ posters });
  },

  async pushProductsInFirebase(data, filmid, ep, cardId) {
    let response = await db
      .collection("allfilms")
      .doc(filmid)
      .get()
      .then(function (doc) {
        return doc.data();
      })
      .then((datafilm) => {
        datafilm.productsObj[ep] = {
          ...datafilm.productsObj[ep],
          [cardId]: data[0],
        };
        let productsObj = datafilm.productsObj;

        db.collection("allfilms")
          .doc(filmid)
          .set({ productsObj }, { merge: true });
      });

  },
  async getFilmFromFirebase(filmId) {
    let response = await db
      .collection("allfilms")
      .doc(filmId)
      .get()
      .then(function (doc) {
        return doc.data();
      });
    return response;
  },

  async getAllFilmsFromFirebase(categories, filmId) {
    let arr = [];
    let response = await db
      .collection(categories)
      .get()
      .then(function (snap) {
        snap.forEach((doc) => {
          let obj = {
            name: doc.id,
            info: doc.data(),
          };
          arr.push(obj);
        });
      });
    return arr;
  },

  async pushAllFilmsInFirebase(film) {
    let response = await db
      .collection("allfilms")
      .doc(film.name)
      .set(film.info)
      .then(() => {
        return true;
      });

    return response;
  },

  async getFilmsPosterFromFirebase(categories) {
    let arr = [];
    let response = await db
      .collection(categories)
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          // doc.data() is never undefined for query doc snapshots

          arr.push(doc.data());
        });
      });

    let arr2 = [];
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i].filmInfo.poster;
      let newPoster = {
        id: arr[i].filmInfo.filmId,
        posterUrl: element,
      };
      arr2.push(newPoster);
    }
    return arr2;
  },
  async getPoster(categ) {
    let response = await db
      .collection("posters")
      .doc(categ)
      .get()
      .then(function (doc) {
        return doc.data();
      });
    return response;
  },

  async setSelectedProduct(data, userId) {
    if (userId === "test") {
      let testData = await db
        .collection("users")
        .doc("test")
        .get()
        .then(function (doc) {
          return doc.data();
        });
      testData.allProducts.push(data);

      db.collection("users")
        .doc("test")
        .set({ allProducts: testData.allProducts }, { merge: true });
    } else {
      db.collection("users").doc(userId).set(data, { merge: true });
    }
  },

  async setFavoritesMovies(movie, userId) {
    let response = await db
      .collection("users")
      .doc(userId)
      .set({ favoritesMovies: movie.favoritesMovies }, { merge: true })
      .then(() => {
        return true;
      });

    return response;
  },
  async setHistoryMovies(movie, userId) {
    let response = await db
      .collection("users")
      .doc(userId)
      .set({ historyMovies: movie.historyMovies }, { merge: true })
      .then(() => {
        return true;
      });

    return response;
  },
};
 */
