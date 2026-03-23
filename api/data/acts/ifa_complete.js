// ═══════════════════════════════════════════════════════════════════
// THE INDIAN FOREST ACT, 1927
// Act No. 16 of 1927 — Dated: 21st September, 1927
// COMPLETE BARE ACT — All Sections (S.1-S.86 + S.41A + S.85A + Schedule)
// Chapters: I(Preliminary) II(Reserved Forests) III(Village Forests)
//           IV(Protected Forests) V(Control over non-Govt Forests)
//           VI(Duty on Timber) VII(Transit Control) VIII(Drift Timber)
//           IX(Penalties & Procedure) X(Cattle Trespass) XI(Forest Officers)
//           XII(Subsidiary Rules) XIII(Miscellaneous)
// Source: Government of India (Public Domain)
// ═══════════════════════════════════════════════════════════════════
module.exports = [

  // ── CHAPTER I — PRELIMINARY ─────────────────────────────────────

  {
    s: "1", t: "Short title and extent",
    act: "Indian Forest Act 1927",
    kw: ["section 1 ifa","indian forest act extent","ifa 1927","forest act 1927","s.1 ifa","indian forest act 1927 application"],
    omitted: false,
    bare: `1. Short title and extent.—(1) This Act may be called the Indian Forest Act, 1927.
(2) It extends to the whole of India except the territories which, immediately before the 1st November, 1956, were comprised in Part B States.
(3) It applies to the territories which, immediately before the 1st November, 1956, were comprised in the States of Bihar, Bombay, Coorg, Delhi, Madhya Pradesh, Orissa, Punjab, Uttar Pradesh and West Bengal; but the Government of any State may by notification in the Official Gazette bring this Act into force in the whole or any specified part of that State to which this Act extends and where it is not in force.
NOTE: Extended to Union territory of Jammu and Kashmir and Union territory of Ladakh by Act 34 of 2019, s. 95 and the Fifth Schedule (31-10-2019).`,
  },

  {
    s: "2", t: "Interpretation clause — Definitions",
    act: "Indian Forest Act 1927",
    kw: ["section 2 ifa","definitions ifa","forest produce definition","timber definition","forest officer definition","cattle definition ifa","tree definition ifa","river definition ifa","forest offence definition","s.2 ifa","2 ifa","interpretation ifa"],
    omitted: false,
    bare: `2. Interpretation clause.—In this Act, unless there is anything repugnant in the subject or context,—
(1) "cattle" includes elephants, camels, buffaloes, horses, mares, geldings, ponies, colts, fillies, mules, asses, pigs, rams, ewes, sheep, lambs, goats and kids;
(2) "Forest-officer" means any person whom the State Government or any officer empowered by the State Government in this behalf, may appoint to carry out all or any of the purposes of this Act or to do anything required by this Act or any rule made thereunder to be done by a Forest-officer;
(3) "forest-offence" means an offence punishable under this Act or under any rule made thereunder;
(4) "forest-produce" includes—
(a) the following whether found in, or brought from, a forest or not, that is to say: timber, charcoal, caoutchouc, catechu, wood-oil, resin, natural varnish, bark, lac, mahua flowers, mahua seeds, kuth and myrobalams, and
(b) the following when found in, or brought from, a forest, that is to say:—
(i) trees and leaves, flowers and fruits, and all other parts or produce not hereinbefore mentioned, of trees,
(ii) plants not being trees (including grass, creepers, reeds and moss), and all parts or produce of such plants,
(iii) wild animals and skins, tusks, horns, bones, silk, cocoons, honey and wax, and all other parts or produce of animals, and
(iv) peat, surface soil, rock, and minerals (including limestone, laterite, mineral oils, and all products of mines or quarries);
(4A) "owner" includes a Court of Wards in respect of property under the superintendence or charge of such Court;
(5) "river" includes any stream, canal, creek or other channels, natural or artificial;
(6) "timber" includes trees when they have fallen or have been felled, and all wood whether cut up or fashioned or hollowed out for any purpose or not;
(7) "tree" includes palms, stumps, brush-wood and canes.`,
  },

  // ── CHAPTER II — OF RESERVED FORESTS ──────────────────────────

  {
    s: "3", t: "Power to reserve forests",
    act: "Indian Forest Act 1927",
    kw: ["section 3 ifa","reserve forest power","3 ifa","constitute reserved forest","reserved forest ifa","s.3 ifa","van aranya arakshit","jungle reserve"],
    omitted: false,
    bare: `3. Power to reserve forests.—The State Government may constitute any forest-land or waste-land which is the property of Government, or over which the Government has proprietary rights, or to the whole or any part of the forest-produce of which the Government is entitled, a reserved forest in the manner hereinafter provided.`,
  },

  {
    s: "4", t: "Notification by State Government",
    act: "Indian Forest Act 1927",
    kw: ["section 4 ifa","notification reserved forest","4 ifa","forest settlement officer","s.4 ifa","notification jungle reserve","ifa notification"],
    omitted: false,
    bare: `4. Notification by State Government.—(1) Whenever it has been decided to constitute any land a reserved forest, the State Government shall issue a notification in the Official Gazette—
(a) declaring that it has been decided to constitute such land a reserved forest;
(b) specifying, as nearly as possible, the situation and limits of such land; and
(c) appointing an officer (hereinafter called "the Forest Settlement-officer") to inquire into and determine the existence, nature and extent of any rights alleged to exist in favour of any person in or over any land comprised within such limits, or in or over any forest-produce, and to deal with the same as provided in this Chapter.
Explanation.—For the purpose of clause (b), it shall be sufficient to describe the limits of the forest by roads, rivers, ridges or other well-known or readily intelligible boundaries.
(2) The officer appointed under clause (c) of sub-section (1) shall ordinarily be a person not holding any forest-office except that of Forest Settlement-officer.
(3) Nothing in this section shall prevent the State Government from appointing any number of officers not exceeding three, not more than one of whom shall be a person holding any forest-office except as aforesaid, to perform the duties of a Forest Settlement-officer under this Act.`,
  },

  {
    s: "5", t: "Bar of accrual of forest-rights",
    act: "Indian Forest Act 1927",
    kw: ["section 5 ifa","bar forest rights","5 ifa","no right forest","fresh clearing prohibited","s.5 ifa","forest rights bar"],
    omitted: false,
    bare: `5. Bar of accrual of forest-rights.—After the issue of a notification under section 4, no right shall be acquired in or over the land comprised in such notification, except by succession or under a grant or contract in writing made or entered into by or on behalf of the Government or some person in whom such right was vested when the notification was issued; and no fresh clearings for cultivation or for any other purpose shall be made in such land except in accordance with such rules as may be made by the State Government in this behalf.`,
  },

  {
    s: "6", t: "Proclamation by Forest Settlement-officer",
    act: "Indian Forest Act 1927",
    kw: ["section 6 ifa","proclamation forest settlement","6 ifa","forest settlement officer proclamation","s.6 ifa","claim period forest","three months claim"],
    omitted: false,
    bare: `6. Proclamation by Forest Settlement-officer.—When a notification has been issued under section 4, the Forest Settlement-officer shall publish in the local vernacular in every town and village in the neighbourhood of the land comprised therein, a proclamation—
(a) specifying, as nearly as possible, the situation and limits of the proposed forest;
(b) explaining the consequences which, as hereinafter provided, will ensue on the reservation of such forest; and
(c) fixing a period of not less than three months from the date of such proclamation, and requiring every person claiming any right mentioned in section 4 or section 5 within such period either to present to the Forest Settlement-officer a written notice specifying or to appear before him and state, the nature of such right and the amount and particulars of the compensation (if any) claimed in respect thereof.`,
  },

  {
    s: "7", t: "Inquiry by Forest Settlement-officer",
    act: "Indian Forest Act 1927",
    kw: ["section 7 ifa","inquiry forest settlement","7 ifa","s.7 ifa","forest rights inquiry","settlement inquiry"],
    omitted: false,
    bare: `7. Inquiry by Forest Settlement-officer.—The Forest Settlement-officer shall take down in writing all statements made under section 6, and shall at some convenient place inquire into all claims duly preferred under that section, and the existence of any rights mentioned in section 4 or section 5 and not claimed under section 6 so far as the same may be ascertainable from the records of Government and the evidence of any persons likely to be acquainted with the same.`,
  },

  {
    s: "8", t: "Powers of Forest Settlement-officer",
    act: "Indian Forest Act 1927",
    kw: ["section 8 ifa","powers forest settlement officer","8 ifa","s.8 ifa","civil court powers settlement","survey demarcate forest"],
    omitted: false,
    bare: `8. Powers of Forest Settlement-officer.—For the purpose of such inquiry, the Forest Settlement-officer may exercise the following powers, that is to say:—
(a) power to enter, by himself or any officer authorised by him for the purpose, upon any land, and to survey, demarcate and make a map of the same; and
(b) the powers of a Civil Court in the trial of suits.`,
  },

  {
    s: "9", t: "Extinction of rights",
    act: "Indian Forest Act 1927",
    kw: ["section 9 ifa","extinction forest rights","9 ifa","s.9 ifa","rights extinguished no claim","forest rights lapse"],
    omitted: false,
    bare: `9. Extinction of rights.—Rights in respect of which no claim has been preferred under section 6 and of the existence of which no knowledge has been acquired by inquiry under section 7, shall be extinguished, unless, before the notification under section 20 is published, the person claiming them satisfies the Forest Settlement-officer that he had sufficient cause for not preferring such claim within the period fixed under section 6.`,
  },

  {
    s: "10", t: "Treatment of claims relating to practice of shifting cultivation",
    act: "Indian Forest Act 1927",
    kw: ["section 10 ifa","shifting cultivation","10 ifa","s.10 ifa","jhum cultivation forest","shifting cultivation claims","swidden agriculture forest"],
    omitted: false,
    bare: `10. Treatment of claims relating to practice of shifting cultivation.—(1) In the case of a claim relating to the practice of shifting cultivation, the Forest Settlement-officer shall record a statement setting forth the particulars of the claim and of any local rule or order under which the practice is allowed or regulated, and submit the statement to the State Government, together with his opinion as to whether the practice should be permitted or prohibited wholly or in part.
(2) On receipt of the statement and opinion, the State Government may make an order permitting or prohibiting the practice wholly or in part.
(3) If such practice is permitted wholly or in part, the Forest Settlement-officer may arrange for its exercise—
(a) by altering the limits of the land under settlement so as to exclude land of sufficient extent, of a suitable kind, and in a locality reasonably convenient for the purposes of the claimants, or
(b) by causing certain portions of the land under settlement to be separately demarcated, and giving permission to the claimants to practice shifting cultivation therein under such conditions as he may prescribe.
(4) All arrangements made under sub-section (3) shall be subject to the previous sanction of the State Government.
(5) The practice of shifting cultivation shall in all cases be deemed a privilege subject to control, restriction and abolition by the State Government.`,
  },

  {
    s: "11", t: "Power to acquire land over which right is claimed",
    act: "Indian Forest Act 1927",
    kw: ["section 11 ifa","acquire land forest rights","11 ifa","s.11 ifa","land acquisition forest","forest land acquisition","exclude forest land"],
    omitted: false,
    bare: `11. Power to acquire land over which right is claimed.—(1) In the case of a claim to a right in or over any land, other than a right-of-way or right of pasture, or a right to forest-produce or a watercourse, the Forest Settlement-officer shall pass an order admitting or rejecting the same in whole or in part.
(2) If such claim is admitted in whole or in part, the Forest Settlement-officer shall either—
(i) exclude such land from the limits of the proposed forest; or
(ii) come to an agreement with the owner thereof for the surrender of his rights; or
(iii) proceed to acquire such land in the manner provided by the Land Acquisition Act, 1894 (1 of 1894).
(3) For the purpose of so acquiring such land—
(a) the Forest Settlement-officer shall be deemed to be a Collector proceeding under the Land Acquisition Act, 1894;
(b) the claimant shall be deemed to be a person interested and appearing before him in pursuance of a notice given under section 9 of that Act;
(c) the provisions of the preceding sections of that Act shall be deemed to have been complied with; and
(d) the Collector, with the consent of the claimant, or the Court, with the consent of both parties, may award compensation in land, or partly in land and partly in money.`,
  },

  {
    s: "12", t: "Order on claims to rights of pasture or to forest-produce",
    act: "Indian Forest Act 1927",
    kw: ["section 12 ifa","pasture rights forest","12 ifa","s.12 ifa","forest produce rights claim","grazing rights forest","pasture claim"],
    omitted: false,
    bare: `12. Order on claims to rights of pasture or to forest-produce.—In the case of a claim to rights of pasture or to forest-produce, the Forest Settlement-officer shall pass an order admitting or rejecting the same in whole or in part.`,
  },

  {
    s: "13", t: "Record to be made by Forest Settlement-officer",
    act: "Indian Forest Act 1927",
    kw: ["section 13 ifa","record forest settlement","13 ifa","s.13 ifa","forest record claimant details"],
    omitted: false,
    bare: `13. Record to be made by Forest Settlement-officer.—The Forest Settlement-officer, when passing any order under section 12, shall record, so far as may be practicable,—
(a) the name, father's name, caste, residence and occupation of the person claiming the right; and
(b) the designation, position and area of all fields or groups of fields (if any), and the designation and position of all buildings (if any) in respect of which the exercise of such rights is claimed.`,
  },

  {
    s: "14", t: "Record where he admits claim",
    act: "Indian Forest Act 1927",
    kw: ["section 14 ifa","admit claim forest","14 ifa","s.14 ifa","grazing cattle number forest","timber quantity forest right"],
    omitted: false,
    bare: `14. Record where he admits claim.—If the Forest Settlement-officer admits in whole or in part any claim under section 12, he shall also record the extent to which the claim is so admitted, specifying the number and description of the cattle which the claimant is from time to time entitled to graze in the forest, the season during which such pasture is permitted, the quantity of timber and other forest-produce which he is from time to time authorised to take or receive, and such other particulars as the case may require. He shall also record whether the timber or other forest-produce obtained by the exercise of the rights claimed may be sold or bartered.`,
  },

  {
    s: "15", t: "Exercise of rights admitted",
    act: "Indian Forest Act 1927",
    kw: ["section 15 ifa","exercise rights forest","15 ifa","s.15 ifa","admitted rights forest continued","pasture rights continued"],
    omitted: false,
    bare: `15. Exercise of rights admitted.—(1) After making such record the Forest Settlement-officer shall, to the best of his ability, and having due regard to the maintenance of the reserved forest in respect of which the claim is made, pass such orders as will ensure the continued exercise of the rights so admitted.
(2) For this purpose the Forest Settlement-officer may—
(a) set out some other forest-tract of sufficient extent, and in a locality reasonably convenient, for the purposes of such claimants, and record an order conferring upon them a right of pasture or to forest-produce (as the case may be) to the extent so admitted; or
(b) so alter the limits of the proposed forest as to exclude forest-land of sufficient extent, and in a locality reasonably convenient, for the purposes of the claimants; or
(c) record an order, continuing to such claimants a right of pasture or to forest-produce, as the case may be, to the extent so admitted, at such seasons, within such portions of the proposed forest, and under such rules, as may be made in this behalf by the State Government.`,
  },

  {
    s: "16", t: "Commutation of rights",
    act: "Indian Forest Act 1927",
    kw: ["section 16 ifa","commutation forest rights","16 ifa","s.16 ifa","rights commuted money payment","forest rights compensation"],
    omitted: false,
    bare: `16. Commutation of rights.—In case the Forest Settlement-officer finds it impossible, having due regard to the maintenance of the reserved forest, to make such settlement under section 15 as shall ensure the continued exercise of the said rights to the extent so admitted, he shall, subject to such rules as the State Government may make in this behalf, commute such rights, by the payment to such persons of a sum of money in lieu thereof, or by the grant of land, or in such other manner as he thinks fit.`,
  },

  {
    s: "17", t: "Appeal from order passed under section 11, 12, 15 or 16",
    act: "Indian Forest Act 1927",
    kw: ["section 17 ifa","appeal forest settlement","17 ifa","s.17 ifa","appeal three months forest","forest court appeal","forest settlement appeal"],
    omitted: false,
    bare: `17. Appeal from order passed under section 11, section 12, section 15 or section 16.—Any person who has made a claim under this Act, or any Forest-officer or other person generally or specially empowered by the State Government in this behalf, may, within three months from the date of the order passed on such claim by the Forest Settlement-officer under section 11, section 12, section 15 or section 16, present an appeal from such order to such officer of the Revenue Department, of rank not lower than that of a Collector, as the State Government may, by notification in the Official Gazette, appoint to hear appeals from such orders:
Provided that the State Government may establish a Court (hereinafter called the Forest Court) composed of three persons to be appointed by the State Government, and, when the Forest Court has been so established, all such appeals shall be presented to it.`,
  },

  {
    s: "18", t: "Appeal under section 17 — Procedure",
    act: "Indian Forest Act 1927",
    kw: ["section 18 ifa","appeal procedure forest","18 ifa","s.18 ifa","forest court procedure","appeal hearing forest settlement"],
    omitted: false,
    bare: `18. Appeal under section 17.—(1) Every appeal under section 17 shall be made by petition in writing, and may be delivered to the Forest Settlement-officer, who shall forward it without delay to the authority competent to hear the same.
(2) If the appeal be to an officer appointed under section 17, it shall be heard in the manner prescribed for the time being for the hearing of appeals in matters relating to land-revenue.
(3) If the appeal be to the Forest Court, the Court shall fix a day and a convenient place in the neighbourhood of the proposed forest for hearing the appeal, and shall give notice thereof to the parties and shall hear such appeal accordingly.
(4) The order passed on the appeal by such officer or Court, or by the majority of the members of such Court, as the case may be, shall, subject only to revision by the State Government, be final.`,
  },

  {
    s: "19", t: "Pleaders",
    act: "Indian Forest Act 1927",
    kw: ["section 19 ifa","pleaders forest","19 ifa","s.19 ifa","legal representation forest inquiry","advocate forest settlement"],
    omitted: false,
    bare: `19. Pleaders.—The State Government, or any person who has made a claim under this Act, may appoint any person to appear, plead and act on its or his behalf before the Forest Settlement-officer, or the appellate officer or Court, in the course of any inquiry or appeal under this Act.`,
  },

  {
    s: "20", t: "Notification declaring forest reserved",
    act: "Indian Forest Act 1927",
    kw: ["section 20 ifa","notification reserved forest declared","20 ifa","s.20 ifa","forest declared reserved","reserved forest notification","arakshit van ghoshit"],
    omitted: false,
    bare: `20. Notification declaring forest reserved.—(1) When the following events have occurred, namely:—
(a) the period fixed under section 6 for preferring claims has elapsed, and all claims, if any, made under that section or section 9 have been disposed of by the Forest Settlement-officer;
(b) if any such claims have been made, the period limited by section 17 for appealing from the orders passed on such claims has elapsed, and all appeals (if any) presented within such period have been disposed of by the appellate officer or Court; and
(c) all lands (if any) to be included in the proposed forest, which the Forest Settlement-officer has, under section 11 elected to acquire under the Land Acquisition Act, 1894, have become vested in the Government under section 16 of that Act,
the State Government shall publish a notification in the Official Gazette, specifying definitely, according to boundary-marks erected or otherwise, the limits of the forest which is to be reserved, and declaring the same to be reserved from a date fixed by the notification.
(2) From the date so fixed such forest shall be deemed to be a reserved forest.`,
  },

  {
    s: "21", t: "Publication of translation of notification in neighbourhood of forest",
    act: "Indian Forest Act 1927",
    kw: ["section 21 ifa","publication translation notification","21 ifa","s.21 ifa","vernacular notification forest","local language forest notification"],
    omitted: false,
    bare: `21. Publication of translation of such notification in neighbourhood of forest.—The Forest-officer shall, before the date fixed by such notification, cause a translation thereof into the local vernacular to be published in every town and village in the neighbourhood of the forest.`,
  },

  {
    s: "22", t: "Power to revise arrangement made under section 15 or section 18",
    act: "Indian Forest Act 1927",
    kw: ["section 22 ifa","revise arrangement forest","22 ifa","s.22 ifa","five years revise forest","modify forest arrangement"],
    omitted: false,
    bare: `22. Power to revise arrangement made under section 15 or section 18.—The State Government may, within five years from the publication of any notification under section 20, revise any arrangement made under section 15 or section 18, and may for this purpose rescind or modify any order made under section 15 or section 18, and direct that any one of the proceedings, specified in section 15 be taken in lieu of any other of such proceedings, or that the rights admitted under section 12 be commuted under section 16.`,
  },

  {
    s: "23", t: "No right acquired over reserved forest, except as here provided",
    act: "Indian Forest Act 1927",
    kw: ["section 23 ifa","no right reserved forest","23 ifa","s.23 ifa","reserved forest rights only grant","forest rights restriction"],
    omitted: false,
    bare: `23. No right acquired over reserved forest, except as here provided.—No right of any description shall be acquired in or over a reserved forest except by succession or under a grant or contract in writing made by or on behalf of the Government or some person in whom such right was vested when the notification under section 20 was issued.`,
  },

  {
    s: "24", t: "Rights not to be alienated without sanction",
    act: "Indian Forest Act 1927",
    kw: ["section 24 ifa","forest rights alienation prohibited","24 ifa","s.24 ifa","no sale forest rights","forest rights transfer restricted"],
    omitted: false,
    bare: `24. Rights not to be alienated without sanction.—(1) Notwithstanding anything contained in section 23, no right continued under clause (c) of sub-section (2) of section 15 shall be alienated by way of grant, sale, lease, mortgage or otherwise, without the sanction of the State Government:
Provided that, when any such right is appendant to any land or house, it may be sold or otherwise alienated with such land or house.
(2) No timber or other forest-produce obtained in exercise of any such right shall be sold or bartered except to such extent as may have been admitted in the order recorded under section 14.`,
  },

  {
    s: "25", t: "Power to stop ways and watercourses in reserved forests",
    act: "Indian Forest Act 1927",
    kw: ["section 25 ifa","stop ways watercourse forest","25 ifa","s.25 ifa","close road reserved forest","forest road water stopped"],
    omitted: false,
    bare: `25. Power to stop ways and watercourses in reserved forests.—The Forest-officer may, with the previous sanction of the State Government or of any officer duly authorised by it in this behalf, stop any public or private way or water-course in a reserved forest, provided that a substitute for the way or water-course so stopped, which the State Government deems to be reasonably convenient, already exists, or has been provided or constructed by the Forest-officer in lieu thereof.`,
  },

  {
    s: "26", t: "Acts prohibited in reserved forests — Offences and penalties",
    act: "Indian Forest Act 1927",
    kw: ["section 26 ifa","prohibited acts reserved forest","26 ifa","s.26 ifa","forest offence reserved","6 months jail forest","500 rupees fine forest","trespass reserved forest","fire forest offence","felling trees offence","reserved forest penalty","van aparadh","jungle mein apradh"],
    omitted: false,
    bare: `26. Acts prohibited in such forests.—(1) Any person who—
(a) makes any fresh clearing prohibited by section 5, or
(b) sets fire to a reserved forest, or, in contravention of any rules made by the State Government in this behalf, kindles any fire, or leaves any fire burning, in such manner as to endanger such a forest;
or who, in a reserved forest—
(c) kindles, keeps or carries any fire except at such seasons as the Forest-officer may notify in this behalf;
(d) trespasses or pastures cattle, or permits cattle to trespass;
(e) causes any damage by negligence in felling any tree or cutting or dragging any timber;
(f) fells, girdles, lops, taps or burns any tree or strips off the bark or leaves from, or otherwise damages, the same;
(g) quarries stone, burns lime or charcoal, or collects, subjects to any manufacturing process, or removes, any forest-produce;
(h) clears or breaks up any land for cultivation or any other purpose;
(i) in contravention of any rules made in this behalf by the State Government hunts, shoots, fishes, poisons water or sets traps or snares; or
(j) in any area in which the Elephants' Preservation Act, 1879, is not in force, kills or catches elephants in contravention of any rules so made;
shall be punishable with imprisonment for a term which may extend to six months, or with fine which may extend to five hundred rupees, or with both, in addition to such compensation for damage done to the forest as the convicting Court may direct to be paid.
(2) Nothing in this section shall be deemed to prohibit—
(a) any act done by permission in writing of the Forest-officer, or under any rule made by the State Government; or
(b) the exercise of any right continued under clause (c) of sub-section (2) of section 15, or created by grant or contract in writing made by or on behalf of the Government under section 23.
(3) Whenever fire is caused wilfully or by gross negligence in a reserved forest, the State Government may (notwithstanding that any penalty has been inflicted under this section) direct that in such forest or any portion thereof the exercise of all rights of pasture or to forest-produce shall be suspended for such period as it thinks fit.`,
  },

  {
    s: "27", t: "Power to declare forest no longer reserved",
    act: "Indian Forest Act 1927",
    kw: ["section 27 ifa","de-reserve forest","27 ifa","s.27 ifa","forest no longer reserved","cease reserved forest"],
    omitted: false,
    bare: `27. Power to declare forest no longer reserved.—(1) The State Government may, by notification in the Official Gazette, direct that, from a date fixed by such notification, any forest or any portion thereof reserved under this Act shall cease to be a reserved forest.
(2) From the date so fixed, such forest or portion shall cease to be reserved; but the rights (if any) which have been extinguished therein shall not revive in consequence of such cessation.`,
  },

  // ── CHAPTER III — OF VILLAGE-FORESTS ──────────────────────────

  {
    s: "28", t: "Formation of village-forests",
    act: "Indian Forest Act 1927",
    kw: ["section 28 ifa","village forest formation","28 ifa","s.28 ifa","gram van","village forest assign","community forest management"],
    omitted: false,
    bare: `28. Formation of village-forests.—(1) The State Government may assign to any village-community the rights of Government to or over any land which has been constituted a reserved forest, and may cancel such assignment. All forests so assigned shall be called village-forests.
(2) The State Government may make rules for regulating the management of village-forests, prescribing the conditions under which the community to which any such assignment is made may be provided with timber or other forest-produce or pasture, and their duties for the protection and improvement of such forest.
(3) All the provisions of this Act relating to reserved forests shall (so far as they are not inconsistent with the rules so made) apply to village-forests.`,
  },

  // ── CHAPTER IV — OF PROTECTED FORESTS ─────────────────────────

  {
    s: "29", t: "Protected forests",
    act: "Indian Forest Act 1927",
    kw: ["section 29 ifa","protected forest","29 ifa","s.29 ifa","rakshit van","protected forest notification","non reserved forest protection"],
    omitted: false,
    bare: `29. Protected forests.—(1) The State Government may, by notification in the Official Gazette, declare the provisions of this Chapter applicable to any forest-land or waste-land which is not included in a reserved forest, but which is the property of Government, or over which the Government has proprietary rights, or to the whole or any part of the forests produce of which the Government is entitled.
(2) The forest-land and waste-lands comprised in any such notification shall be called a "protected forests".
(3) No such notification shall be made unless the nature and extent of the rights of Government and of private persons in or over the forest-land or waste-land comprised therein have been inquired into and recorded at a survey or settlement, or in such other manner as the State Government thinks sufficient. Every such record shall be presumed to be correct until the contrary is proved:
Provided that, if, in the case of any forest-land or waste-land, the State Government thinks that such inquiry and record are necessary, but that they will occupy such length of time as in the mean time to endanger the rights of Government, the State Government may, pending such inquiry and record, declare such land to be a protected forest, but so as not to abridge or affect any existing rights of individuals or communities.`,
  },

  {
    s: "30", t: "Power to issue notification reserving trees, etc.",
    act: "Indian Forest Act 1927",
    kw: ["section 30 ifa","reserve trees protected forest","30 ifa","s.30 ifa","notification protected forest trees","close forest portion","thirty years closure"],
    omitted: false,
    bare: `30. Power to issue notification reserving trees, etc.—The State Government may, by notification in the Official Gazette,—
(a) declare any trees or class of trees in a protected forest to be reserved from a date fixed by the notification;
(b) declare that any portion of such forest specified in the notification shall be closed for such term, not exceeding thirty years, as the State Government thinks fit, and that the rights of private persons, if any, over such portion shall be suspended during such term, provided that the remainder of such forest be sufficient, and in a locality reasonably convenient, for the due exercise of the rights suspended in the portion so closed; or
(c) prohibit, from a date fixed as aforesaid, the quarrying of stone, or the burning of lime or charcoal, or the collection or subjection to any manufacturing process, or removal of, any forest-produce in any such forest, and the breaking up or clearing for cultivation, for building, for herding cattle or for any other purpose, of any land in any such forest.`,
  },

  {
    s: "31", t: "Publication of translation of notification in neighbourhood",
    act: "Indian Forest Act 1927",
    kw: ["section 31 ifa","publication protected forest notification","31 ifa","s.31 ifa","collector publish notification forest"],
    omitted: false,
    bare: `31. Publication of translation of such notification in neighbourhood.—The Collector shall cause a translation into the local vernacular of every notification issued under section 30 to be affixed in a conspicuous place in every town and village in the neighbourhood of the forests comprised in the notification.`,
  },

  {
    s: "32", t: "Power to make rules for protected forests",
    act: "Indian Forest Act 1927",
    kw: ["section 32 ifa","rules protected forest","32 ifa","s.32 ifa","protected forest rules licence","timber removal rules","grazing rules protected forest"],
    omitted: false,
    bare: `32. Power to make rules for protected forests.—The State Government may make rules to regulate the following matters, namely:—
(a) the cutting, sawing, conversion and removal of trees and timber, and the collection, manufacture and removal of forest-produce, from protected forests;
(b) the granting of licenses to the inhabitants of towns and villages in the vicinity of protected forests to take trees, timber or other forest-produce for their own use, and the production and return of such licenses by such persons;
(c) the granting of licenses to persons felling or removing trees or timber or other forest-produce from such forests for the purposes of trade, and the production and return of such licenses by such persons;
(d) the payments, if any, to be made by the persons mentioned in clauses (b) and (c) for permission to cut such trees, or to collect and remove such timber or other forest-produce;
(e) the other payments, if any, to be made by them in respect of such trees, timber and produce, and the places where such payment shall be made;
(f) the examination of forest-produce passing out of such forests;
(g) the clearing and breaking up of land for cultivation or other purposes in such forests;
(h) the protection from fire of timber laying in such forests and of trees reserved under section 30;
(i) the cutting of grass and pasturing of cattle in such forests;
(j) hunting, shooting, fishing, poisoning water and setting traps or snares in such forests, and the killing or catching of elephants in such forests in areas in which the Elephants Preservation Act, 1879, is not in force;
(k) the protection and management of any portion of a forest closed under section 30; and
(l) the exercise of rights referred to in section 29.`,
  },

  {
    s: "33", t: "Penalties for acts in contravention of notification under section 30 or rules under section 32",
    act: "Indian Forest Act 1927",
    kw: ["section 33 ifa","protected forest offence","33 ifa","s.33 ifa","penalty protected forest","6 months fine 500 protected","burn tree protected forest","protected forest trespass","rakshit van aparadh"],
    omitted: false,
    bare: `33. Penalties for acts in contravention of notification under section 30 or of rules under section 32.—(1) Any person who commits any of the following offences, namely:—
(a) fells, girdles, lops, taps or burns any tree reserved under section 30, or strips off the bark or leaves from, or otherwise damages, any such tree;
(b) contrary to any prohibition under section 30, quarries any stone, or burns any lime or charcoal, or collects, subjects to any manufacturing process, or removes any forest-produce;
(c) contrary to any prohibition under section 30, breaks up or clears for cultivation or any other purpose any land in any protected forest;
(d) sets fire to such forest, or kindles a fire without taking all reasonable precautions to prevent its spreading to any tree reserved under section 30, whether standing, fallen or felled, or to any closed portion of such forest;
(e) leaves burning any fire kindled by him in the vicinity of any such tree or closed portion;
(f) fells any tree or drags any timber so as to damage any tree reserved as aforesaid;
(g) permits cattle to damage any such tree;
(h) infringes any rule made under section 32;
shall be punishable with imprisonment for a term which may extend to six months or with fine which may extend to five hundred rupees, or with both.
(2) Whenever fire is caused wilfully or by gross negligence in a protected forest, the State Government may, notwithstanding that any penalty has been inflicted under this section, direct that in such forest or any portion thereof the exercise of any right of pasture or to forest-produce shall be suspended for such period as it thinks fit.`,
  },

  {
    s: "34", t: "Nothing in this Chapter to prohibit acts done in certain cases",
    act: "Indian Forest Act 1927",
    kw: ["section 34 ifa","exception protected forest","34 ifa","s.34 ifa","permitted acts protected forest","forest officer permission"],
    omitted: false,
    bare: `34. Nothing in this Chapter to prohibit acts done in certain cases.—Nothing in this Chapter shall be deemed to prohibit any act done with the permission in writing of the Forest-officer, or in accordance with rules made under section 32, or, except as regards any portion of a forest closed under section 30, or as regards any rights the exercise of which has been suspended under section 33, in the exercise of any right recorded under section 29.`,
  },

  // ── CHAPTER V — CONTROL OVER FORESTS NOT PROPERTY OF GOVT ──────

  {
    s: "35", t: "Protection of forests for special purposes",
    act: "Indian Forest Act 1927",
    kw: ["section 35 ifa","protect forest special purpose","35 ifa","s.35 ifa","private forest regulation","flood protection forest","soil erosion forest","public health forest"],
    omitted: false,
    bare: `35. Protection of forests for special purposes.—(1) The State Government may, by notification in the Official Gazette, regulate or prohibit in any forest or waste-land—
(a) the breaking up or clearing of land for cultivation;
(b) the pasturing of cattle; or
(c) the firing or clearing of the vegetation;
when such regulation or prohibition appears necessary for any of the following purposes:—
(i) for protection against storms, winds, rolling stones, floods and avalanches;
(ii) for the preservation of the soil on the ridges and slopes and in the valleys of hilly tracts, the prevention of landslips or of the formation of ravines, and torrents, or the protection of land against erosion, or the deposit thereon of sand, stones or gravel;
(iii) for the maintenance of a water-supply in springs, rivers and tanks;
(iv) for the protection of roads, bridges, railways and other lines of communication;
(v) for the preservation of the public health.
(2) The State Government may, for any such purpose, construct at its own expense, in or upon any forest or waste-land, such work as it thinks fit.
(3) No notification shall be made under sub-section (1) nor shall any work be begun under sub-section (2), until after the issue of a notice to the owner of such forest or land calling on him to show cause, within a reasonable period to be specified in such notice, why such notification should not be made or work constructed, as the case may be, and until his objections, if any, and any evidence he may produce in support of the same, have been heard by an officer duly appointed in that behalf and have been considered by the State Government.`,
  },

  {
    s: "36", t: "Power to assume management of forests",
    act: "Indian Forest Act 1927",
    kw: ["section 36 ifa","assume management forest","36 ifa","s.36 ifa","government take over private forest","neglect forest management"],
    omitted: false,
    bare: `36. Power to assume management of forests.—(1) In case of neglect of, or willful disobedience to, any regulation or prohibition under section 35, or if the purposes of any work to be constructed under that section so require, the State Government may, after notice in writing to the owner of such forest or land and after considering his objections, if any, place the same under the control of a Forest-officer, and may declare that all or any of the provisions of this Act relating to reserved forests shall apply to such forest or land.
(2) The net profits, if any, arising from the management of such forest or land shall be paid to the said owner.`,
  },

  {
    s: "37", t: "Expropriation of forests in certain cases",
    act: "Indian Forest Act 1927",
    kw: ["section 37 ifa","expropriation forest","37 ifa","s.37 ifa","acquire private forest public purpose","owner require forest acquired"],
    omitted: false,
    bare: `37. Expropriation of forests in certain cases.—(1) In any case under this Chapter in which the State Government considers that, in lieu of placing the forest or land under the control of a Forest-officer, the same should be acquired for public purposes, the State Government may proceed to acquire it in the manner provided by the Land Acquisition Act, 1894 (1 of 1894).
(2) The owner of any forest or land comprised in any notification under section 35 may, at any time not less than three or more than twelve years from the date thereof, require that such forest or land shall be acquired for public purposes, and the State Government shall acquire such forest or land accordingly.`,
  },

  {
    s: "38", t: "Protection of forests at request of owners",
    act: "Indian Forest Act 1927",
    kw: ["section 38 ifa","owner request forest protection","38 ifa","s.38 ifa","private forest protection owner","voluntary forest protection"],
    omitted: false,
    bare: `38. Protection of forests at request of owners.—(1) The owner of any land or, if there be more than one owner thereof, the owners of shares therein amounting in the aggregate to at least two-thirds thereof may, with a view to the formation or conservation of forests thereon, represent in writing to the Collector their desire—
(a) that such land be managed on their behalf by the Forest-officer as a reserved or a protected forest on such terms as may be mutually agreed upon; or
(b) that all or any of the provisions of this Act be applied to such land.
(2) In either case, the State Government may, by notification in the Official Gazette, apply to such land such provisions of this Act as it thinks suitable to the circumstances thereof and as may be desired by the applicants.`,
  },

  // ── CHAPTER VI — DUTY ON TIMBER AND OTHER FOREST-PRODUCE ───────

  {
    s: "39", t: "Power to impose duty on timber and other forest-produce",
    act: "Indian Forest Act 1927",
    kw: ["section 39 ifa","duty timber forest produce","39 ifa","s.39 ifa","forest produce duty levy","timber duty","van upaj shulk"],
    omitted: false,
    bare: `39. Power to impose duty on timber and other forest-produce.—(1) The Central Government may levy a duty in such manner, at such places and at such rates as it may declare by notification in the Official Gazette on all timber or other forest-produce—
(a) which is produced in the territories to which this Act extends, and in respect of which the Government has any right;
(b) which is brought from any place outside the territories to which this Act extends.
(2) In every case in which such duty is directed to be levied ad valorem, the Central Government may fix by like notification the value on which such duty shall be assessed.
(3) All duties on timber or other forest-produce which, at the time when this Act comes into force in any territory, are levied therein under the authority of the State Government, shall be deemed to be and to have been duly levied under the provisions of this Act.
(4) Notwithstanding anything in this section, the State Government may, until provision to the contrary is made by Parliament, continue to levy any duty which it was lawfully levying before the commencement of the Constitution, under this section as then in force:
Provided that nothing in this sub-section authorises the levy of any duty which as between timber or other forest-produce of the State and similar produce of the locality outside the State discriminates in favour of the former, or which, in the case of timber or other forest-produce of localities outside the State, discriminates between timber or other forest-produce of one locality and similar timber or other forest-produce of another locality.`,
  },

  {
    s: "40", t: "Limit not to apply to purchase-money or royalty",
    act: "Indian Forest Act 1927",
    kw: ["section 40 ifa","royalty forest produce","40 ifa","s.40 ifa","purchase money forest royalty","timber royalty not limit"],
    omitted: false,
    bare: `40. Limit not to apply to purchase-money or royalty.—Nothing in this Chapter shall be deemed to limit the amount, if any, chargeable as purchase-money or royalty on any timber or other forest-produce, although the same is levied on such timber or produce while in transit, in the same manner as duty is levied.`,
  },

  // ── CHAPTER VII — CONTROL OF TIMBER AND FOREST-PRODUCE IN TRANSIT ──

  {
    s: "41", t: "Power to make rules to regulate transit of forest-produce",
    act: "Indian Forest Act 1927",
    kw: ["section 41 ifa","transit forest produce rules","41 ifa","s.41 ifa","timber transit rules","forest produce transit","pass transit timber","marking timber rules"],
    omitted: false,
    bare: `41. Power to make rules to regulate transit of forest-produce.—(1) The control of all rivers and their banks as regards the floating of timber, as well as the control of all timber and other forest-produce in transit by land or water, is vested in the State Government, and it may make rules to regulate the transit of all timber and other forest-produce.
(2) In particular and without prejudice to the generality of the foregoing power such rules may—
(a) prescribe the routes by which alone timber or other forest-produce may be imported, exported or moved into, from or within the State;
(b) prohibit the import or export or moving of such timber or other produce without a pass from an officer duly authorised to issue the same, or otherwise than in accordance with the conditions of such pass;
(c) provide for the issue, production and return of such passes and for the payment of fees therefore;
(d) provide for the stoppage, reporting, examination and marking of timber or other forest-produce in transit, in respect of which there is reason to believe that any money is payable to the Government on account of the price thereof, or on account of any duty, fee, royalty or charge due thereon, or, to which it is desirable for the purposes of this Act to affix a mark;
(e) provide for the establishment and regulation of depots to which such timber or other produce shall be taken by those in charge of it for examination, or for the payment of such money, or in order that such marks may be affixed to it, and the conditions under which such timber or other produce shall be brought to, stored at and removed from such depots;
(f) prohibit the closing up or obstructing of the channel or banks of any river used for the transit of timber or other forest-produce, and the throwing of grass, brushwood, branches or leaves into any such river or any act which may cause such river to be closed or obstructed;
(g) provide for the prevention or removal of any obstruction of the channel or banks of any such river, and for recovering the cost of such prevention or removal from the person whose acts or negligence necessitated the same;
(h) prohibit absolutely or subject to conditions, within specified local limits, the establishment of saw-pits, the converting, cutting, burning, concealing or making of timber, the altering or effacing of any marks on the same, or the possession or carrying of marking hammers or other implements used for marking timber;
(i) regulate the use of property marks for timber, and the registration of such marks; prescribe the time for which such registration shall hold good; limit the number of such marks that may be registered by any one person, and provide for the levy of fees for such registration.
(3) The State Government may direct that any rule made under this section shall not apply to any specified class of timber or other forest-produce or to any specified local area.`,
  },

  {
    s: "41A", t: "Powers of Central Government as to movements of timber across customs frontiers",
    act: "Indian Forest Act 1927",
    kw: ["section 41a ifa","customs frontier timber","41a ifa","s.41a ifa","central government timber import export","customs forest produce"],
    omitted: false,
    bare: `41A. Powers of Central Government as to movements of timber across customs frontiers.—Notwithstanding anything in section 41, the Central Government may make rules to prescribe the route by which alone timber or other forest-produce may be imported, exported or moved into or from the territories to which this Act extends across any customs frontier as defined by the Central Government, and any rules made under section 41 shall have effect subject to the rules made under this section.`,
  },

  {
    s: "42", t: "Penalty for breach of rules made under section 41",
    act: "Indian Forest Act 1927",
    kw: ["section 42 ifa","penalty transit rules","42 ifa","s.42 ifa","breach transit rules fine","6 months 500 rupees transit","double penalty transit"],
    omitted: false,
    bare: `42. Penalty for breach of rules made under section 41.—(1) The State Government may by such rules prescribe as penalties for the contravention thereof imprisonment for a term which may extend to six months, or fine which may extend to five hundred rupees, or both.
(2) Such rules may provide that penalties which are double of those mentioned in sub-section (1) may be inflicted in cases where the offence is committed after sunset and before sunrise, or after preparation for resistance to lawful authority, or where the offender has been previously convicted of a like offence.`,
  },

  {
    s: "43", t: "Government and Forest-officers not liable for damage to forest-produce at depot",
    act: "Indian Forest Act 1927",
    kw: ["section 43 ifa","government not liable depot damage","43 ifa","s.43 ifa","depot loss forest produce","forest officer liability depot"],
    omitted: false,
    bare: `43. Government and Forest-officers not liable for damage to forest-produce at depot.—The Government shall not be responsible for any loss or damage which may occur in respect of any timber or other forest-produce while at a depot established under a rule made under section 41, or while detained elsewhere, for the purposes of this Act; and no Forest-officer shall be responsible for any such loss or damage, unless he causes such loss or damage negligently, maliciously or fraudulently.`,
  },

  {
    s: "44", t: "All persons bound to aid in case of accident at depot",
    act: "Indian Forest Act 1927",
    kw: ["section 44 ifa","aid accident depot","44 ifa","s.44 ifa","assist forest officer depot emergency"],
    omitted: false,
    bare: `44. All persons bound to aid in case of accident at depot.—In case of any accident or emergency involving danger to any property at any such depot, every person employed at such depot, whether by the Government or by any private person, shall render assistance to any Forest-officer or Police-officer demanding his aid in averting such danger or securing such property from damage or loss.`,
  },

  // ── CHAPTER VIII — COLLECTION OF DRIFT AND STRANDED TIMBER ──────

  {
    s: "45", t: "Certain kinds of timber to be deemed property of Government until title proved",
    act: "Indian Forest Act 1927",
    kw: ["section 45 ifa","drift timber government property","45 ifa","s.45 ifa","stranded timber government","adrift timber","unmarked timber government"],
    omitted: false,
    bare: `45. Certain kinds of timber to be deemed property of Government until title thereto proved, and may be collected accordingly.—(1) All timber found adrift, beached, stranded or sunk; all wood or timber bearing marks which have not been registered in accordance with the rules made under section 41, or on which the marks have been obliterated, altered or defaced by fire or otherwise; and in such areas as the State Government directs, all unmarked wood and timber; shall be deemed to be the property of Government, unless and until any person establishes his right and title thereto, as provided in this Chapter.
(2) Such timber may be collected by any forest-officer or other person entitled to collect the same by virtue of any rule made under section 51, and may be brought to any depot which the Forest-officer may notify as a depot for the reception of drift timber.
(3) The State Government may, by notification in the Official Gazette, exempt any class of timber from the provisions of this section.`,
  },

  {
    s: "46", t: "Notice to claimants of drift-timber",
    act: "Indian Forest Act 1927",
    kw: ["section 46 ifa","notice drift timber claimants","46 ifa","s.46 ifa","public notice drift timber","two months claim timber"],
    omitted: false,
    bare: `46. Notice to claimants of drift timber.—Public notice shall from time to time be given by the Forest-officer of timber collected under section 45. Such notice shall contain a description of the timber, and shall require any person claiming the same to present to such officer, within a period not less than two months from the date of such notice, a written statement of such claim.`,
  },

  {
    s: "47", t: "Procedure on claim preferred to such timber",
    act: "Indian Forest Act 1927",
    kw: ["section 47 ifa","procedure drift timber claim","47 ifa","s.47 ifa","drift timber claim inquiry","civil court timber claim"],
    omitted: false,
    bare: `47. Procedure on claim preferred to such timber.—(1) When any such statement is presented as aforesaid, the Forest-officer may, after making such inquiry as he thinks fit, either reject the claim after recording his reasons for so doing, or deliver the timber to the claimant.
(2) If such timber is claimed by more than one person, the Forest-officer may either deliver the same to any of such persons whom he deems entitled thereto, or may refer the claimants to the Civil Courts, and, retain the timber pending the receipt of an order from any such Court for its disposal.
(3) Any person whose claim has been rejected under this section may, within three months from the date of such rejection, institute a suit to recover possession of the timber claimed by him; but no person shall recover any compensation or costs against the Government, or against any Forest-officer, on account of such rejection, or the detention or removal of any timber, or the delivery thereof to any other person under this section.
(4) No such timber shall be subject to process of any Civil, Criminal or Revenue Court until it has been delivered, or a suit has been brought, as provided in this section.`,
  },

  {
    s: "48", t: "Disposal of unclaimed timber",
    act: "Indian Forest Act 1927",
    kw: ["section 48 ifa","unclaimed timber disposal","48 ifa","s.48 ifa","drift timber unclaimed vest government","no claim timber"],
    omitted: false,
    bare: `48. Disposal of unclaimed timber.—If no such statement is presented as aforesaid, or if the claimant omits to prefer his claim in the manner and within the period fixed by the notice issued under section 46, or on such claim having been so preferred by him and having been rejected, omits to institute a suit to recover possession of such timber within the further period fixed by section 47, the ownership of such timber shall vest in the Government, or, when such timber has been delivered to another person under section 47, in such other person free from all encumbrances not created by him.`,
  },

  {
    s: "49", t: "Government and its officers not liable for damage to such timber",
    act: "Indian Forest Act 1927",
    kw: ["section 49 ifa","government not liable drift timber","49 ifa","s.49 ifa","forest officer liability drift timber"],
    omitted: false,
    bare: `49. Government and its officers not liable for damage to such timber.—The Government shall not be responsible for any loss or damage which may occur in respect of any timber collected under section 45, and no Forest-officer shall be responsible for any such loss or damage, unless he causes such loss or damage negligently, maliciously or fraudulently.`,
  },

  {
    s: "50", t: "Payments to be made by claimant before timber is delivered",
    act: "Indian Forest Act 1927",
    kw: ["section 50 ifa","payment before timber delivery","50 ifa","s.50 ifa","charges drift timber claimant"],
    omitted: false,
    bare: `50. Payments to be made by claimant before timber is delivered to him.—No person shall be entitled to recover possession of any timber collected or delivered as aforesaid until he has paid to the Forest-officer or other person entitled to receive it such sum on account thereof as may be due under any rule made under section 51.`,
  },

  {
    s: "51", t: "Power to make rules and prescribe penalties",
    act: "Indian Forest Act 1927",
    kw: ["section 51 ifa","rules drift timber penalties","51 ifa","s.51 ifa","drift timber rules salving","boat registration timber","6 months 500 drift"],
    omitted: false,
    bare: `51. Power to make rules and prescribe penalties.—(1) The State Government may, by notification in the Official Gazette, make rules to regulate the following matters, namely:—
(a) the salving, collection and disposal of all timber mentioned in section 45;
(b) the use and registration of boats used in salving and collecting timber;
(c) the amounts to be paid for salving, collecting, moving, storing or disposing of such timber; and
(d) the use and registration of hammers and other instruments to be used for marking such timber.
(1A) Every rule made by the State Government under this Act shall be laid, as soon as may be after it is made, before the State Legislature.
(2) The State Government may prescribe, as penalties for the contravention of any rules made under this section, imprisonment for a term which may extend to six months, or fine which may extend to five hundred rupees, or both.`,
  },

  // ── CHAPTER IX — PENALTIES AND PROCEDURE ──────────────────────

  {
    s: "52", t: "Seizure of property liable to confiscation",
    act: "Indian Forest Act 1927",
    kw: ["section 52 ifa","seizure property forest","52 ifa","s.52 ifa","forest produce seizure","tools boats cattle seizure","forest officer seize","police officer seize forest","van upaj zabt"],
    omitted: false,
    bare: `52. Seizure of property liable to confiscation.—(1) When there is reason to believe that a forest-offence has been committed in respect of any forest-produce, such produce, together with all tools, boats, carts or cattle used in committing any such offence, may be seized by any Forest-officer or Police-officer.
(2) Every officer seizing any property under this section shall place on such property a mark indicating that the same has been so seized, and shall, as soon as may be, make a report of such seizure to the Magistrate having jurisdiction to try the offence on account of which the seizure has been made:
Provided that, when the forest-produce with respect to which such offence is believed to have been committed is the property of Government, and the offender is unknown, it shall be sufficient if the officer makes, as soon as may be, a report of the circumstances to his official superior.`,
  },

  {
    s: "53", t: "Power to release property seized under section 52",
    act: "Indian Forest Act 1927",
    kw: ["section 53 ifa","release seized property forest","53 ifa","s.53 ifa","forest officer release bond","ranger release tools cattle"],
    omitted: false,
    bare: `53. Power to release property seized under section 52.—Any Forest-officer of a rank not inferior to that of a Ranger who, or whose subordinate, has seized any tools, boats, carts or cattle under section 52, may release the same on the execution by the owner thereof a bond for the production of the property so released, if and when so required, before the Magistrate having jurisdiction to try the offence on account of which the seizure has been made.`,
  },

  {
    s: "54", t: "Procedure thereupon — Magistrate after receiving report",
    act: "Indian Forest Act 1927",
    kw: ["section 54 ifa","magistrate procedure forest","54 ifa","s.54 ifa","arrest offender forest magistrate","disposal property forest"],
    omitted: false,
    bare: `54. Procedure thereupon.—Upon the receipt of any such report, the Magistrate shall, with all convenient despatch, take such measures as may be necessary for the arrest and trial of the offender and the disposal of the property according to law.`,
  },

  {
    s: "55", t: "Forest-produce, tools, etc., when liable to confiscation",
    act: "Indian Forest Act 1927",
    kw: ["section 55 ifa","confiscation forest produce tools","55 ifa","s.55 ifa","forest produce liable confiscation","boat cattle confiscated forest","zabt van upaj"],
    omitted: false,
    bare: `55. Forest-produce, tools, etc., when liable to confiscation.—(1) All timber or forest-produce which is not the property of Government and in respect of which a forest-offence has been committed, and all tools, boats, carts and cattle used in committing any forest-offence, shall be liable to confiscation.
(2) Such confiscation may be in addition to any other punishment prescribed for such offence.`,
  },

  {
    s: "56", t: "Disposal on conclusion of trial for forest-offence",
    act: "Indian Forest Act 1927",
    kw: ["section 56 ifa","disposal forest produce trial","56 ifa","s.56 ifa","forest produce after conviction","confiscated forest produce disposal"],
    omitted: false,
    bare: `56. Disposal on conclusion of trial for forest-offence, of produce in respect of which it was committed.—When the trial of any forest-offence is concluded, any forest-produce in respect of which such offence has been committed shall, if it is the property of Government or has been confiscated, be taken charge of by a Forest-officer, and, in any other case, may be disposed of in such manner as the Court may direct.`,
  },

  {
    s: "57", t: "Procedure when offender not known or cannot be found",
    act: "Indian Forest Act 1927",
    kw: ["section 57 ifa","offender unknown forest","57 ifa","s.57 ifa","forest produce confiscated offender unknown","one month notice forest"],
    omitted: false,
    bare: `57. Procedure when offender not known, or cannot be found.—When the offender is not known or cannot be found, the Magistrate may, if he finds that an offence has been committed, order the property in respect of which the offence has been committed to be confiscated and taken charge of by the Forest-officer or to be made over to the person whom the Magistrate deems to be entitled to the same:
Provided that no such order shall be made until the expiration of one month from the date of seizing such property, or without hearing the person, if any, claiming any right thereto, and the evidence, if any, which he may produce in support of his claim.`,
  },

  {
    s: "58", t: "Procedure as to perishable property seized under section 52",
    act: "Indian Forest Act 1927",
    kw: ["section 58 ifa","perishable property forest","58 ifa","s.58 ifa","sell perishable forest produce","speedy decay forest produce sale"],
    omitted: false,
    bare: `58. Procedure as to perishable property seized under section 52.—The Magistrate may, notwithstanding anything hereinbefore contained, direct the sale of any property seized under section 52 and subject to speedy and natural decay, and may deal with the proceeds as he would have dealt with such property if it had not been sold.`,
  },

  {
    s: "59", t: "Appeal from orders under section 55, 56 or 57",
    act: "Indian Forest Act 1927",
    kw: ["section 59 ifa","appeal confiscation forest","59 ifa","s.59 ifa","one month appeal forest confiscation","forest produce appeal"],
    omitted: false,
    bare: `59. Appeal from orders under section 55, section 56 or section 57.—The officer who made the seizure under section 52, or any of his official superiors, or any person claiming to be interested in the property so seized, may, within one month from the date of any order passed under section 55, section 56 or section 57, appeal therefrom to the Court to which orders made by such Magistrate are ordinarily appealable, and the order passed on such appeal shall be final.`,
  },

  {
    s: "60", t: "Property when to vest in Government",
    act: "Indian Forest Act 1927",
    kw: ["section 60 ifa","property vest government forest","60 ifa","s.60 ifa","confiscated property government","forest produce government vest"],
    omitted: false,
    bare: `60. Property when to vest in Government.—When an order for the confiscation of any property has been passed under section 55 or section 57, as the case may be, and the period limited by section 59 for an appeal from such order has elapsed, and no such appeal has been preferred, or when on such an appeal being preferred, the Appellate Court confirms such order in respect of the whole or a portion of such property, such property or such portion thereof, as the case may be, shall vest in the Government free from all incumbrances.`,
  },

  {
    s: "61", t: "Saving of power to release property seized",
    act: "Indian Forest Act 1927",
    kw: ["section 61 ifa","release seized property forest power","61 ifa","s.61 ifa","state government release forest property"],
    omitted: false,
    bare: `61. Saving of power to release property seized.—Nothing hereinbefore contained shall be deemed to prevent any officer empowered in this behalf by the State Government from directing at any time the immediate release of any property seized under section 52.`,
  },

  {
    s: "62", t: "Punishment for wrongful seizure",
    act: "Indian Forest Act 1927",
    kw: ["section 62 ifa","wrongful seizure punishment","62 ifa","s.62 ifa","vexatious seizure forest officer","6 months fine 500 wrongful seizure"],
    omitted: false,
    bare: `62. Punishment for wrongful seizure.—Any Forest-officer or Police-officer who vexatiously and unnecessarily seizes any property on pretence of seizing property liable to confiscation under this Act shall be punishable with imprisonment for a term which may extend to six months, or with fine which may extend to five hundred rupees, or with both.`,
  },

  {
    s: "63", t: "Penalty for counterfeiting or defacing marks on trees and timber and for altering boundary-marks",
    act: "Indian Forest Act 1927",
    kw: ["section 63 ifa","counterfeit tree mark","63 ifa","s.63 ifa","deface forest mark","alter boundary forest","2 years imprisonment forest mark","tamper forest boundary"],
    omitted: false,
    bare: `63. Penalty for counterfeiting or defacing marks on trees and timber and for altering boundary-marks.—Whoever, with intent to cause damage or injury to the public or to any person, or to cause wrongful gain as defined in the Indian Penal Code (45 of 1860),—
(a) knowingly counterfeits upon any timber or standing tree a mark used by Forest-officers to indicate that such timber or tree is the property of the Government or of some person, or that it may lawfully be cut or removed by some person; or
(b) alters, defaces or obliterates any such mark placed on a tree or on timber by or under the authority of a Forest-officer; or
(c) alters, moves, destroys or defaces any boundary-mark of any forest or waste-land to which the provisions of this Act are applied,
shall be punishable with imprisonment for a term which may extend to two years, or with fine, or with both.`,
  },

  {
    s: "64", t: "Power to arrest without warrant",
    act: "Indian Forest Act 1927",
    kw: ["section 64 ifa","arrest without warrant forest","64 ifa","s.64 ifa","forest officer arrest power","police forest arrest no warrant"],
    omitted: false,
    bare: `64. Power to arrest without warrant.—(1) Any Forest-officer or Police-officer may, without orders from a Magistrate and without a warrant, arrest any person against whom a reasonable suspicion exists of his having been concerned in any forest-offence punishable with imprisonment for one month or upwards.
(2) Every officer making an arrest under this section shall, without unnecessary delay and subject to the provisions of this Act as to release on bond, take or send the person arrested before the Magistrate having jurisdiction in the case, or to the officer in charge of the nearest police-station.
(3) Nothing in this section shall be deemed to authorise such arrest for any act which is an offence under Chapter IV unless such act has been prohibited under clause (c) of section 30.`,
  },

  {
    s: "65", t: "Power to release on a bond a person arrested",
    act: "Indian Forest Act 1927",
    kw: ["section 65 ifa","release arrested bond forest","65 ifa","s.65 ifa","ranger release person arrested forest","forest arrest bond"],
    omitted: false,
    bare: `65. Power to release on a bond a person arrested.—Any Forest-officer of a rank not inferior to that of a Ranger, who, or whose subordinate, has arrested any person under the provisions of section 64, may release such person on his executing a bond to appear, if and when so required, before the Magistrate having jurisdiction in the case, or before the officer in charge of the nearest police station.`,
  },

  {
    s: "66", t: "Power to prevent commission of offence",
    act: "Indian Forest Act 1927",
    kw: ["section 66 ifa","prevent forest offence","66 ifa","s.66 ifa","forest officer prevent crime","police officer prevent forest offence"],
    omitted: false,
    bare: `66. Power to prevent commission of offence.—Every Forest-officer and Police-officer shall prevent, and may interfere for the purpose of preventing, the commission of any forest-offence.`,
  },

  {
    s: "67", t: "Power to try offences summarily",
    act: "Indian Forest Act 1927",
    kw: ["section 67 ifa","summary trial forest","67 ifa","s.67 ifa","magistrate summary trial forest","forest offence summary","district magistrate forest trial"],
    omitted: false,
    bare: `67. Power to try offences summarily.—The District Magistrate or any Magistrate of the first class specially empowered in this behalf by the State Government may try summarily, under the Code of Criminal Procedure, 1898 (5 of 1898), any forest-offence punishable with imprisonment for a term not exceeding six months, or fine not exceeding five hundred rupees, or both.`,
  },

  {
    s: "68", t: "Power to compound offences",
    act: "Indian Forest Act 1927",
    kw: ["section 68 ifa","compound forest offence","68 ifa","s.68 ifa","compromise forest offence","compensation forest ranger","settle forest case","compounding forest offence"],
    omitted: false,
    bare: `68. Power to compound offences.—(1) The State Government may, by notification in the Official Gazette, empower a Forest officer—
(a) to accept from any person against whom a reasonable suspicion exists that he has committed any forest-offence, other than an offence specified in section 62 or section 63, a sum of money by way of compensation for the offence which such person is suspected to have committed, and
(b) when any property has been seized as liable to confiscation, to release the same on payment of the value thereof as estimated by such officer.
(2) On the payment of such sum of money, or such value, or both, as the case may be, to such officer, the suspected person, if in custody, shall be discharged, the property, if any seized shall be released, and no further proceedings shall be taken against such person or property.
(3) A Forest-officer shall not be empowered under this section unless he is a Forest-officer of a rank not inferior to that of a Ranger and is in receipt of a monthly salary amounting to at least one hundred rupees, and the sum of money accepted as compensation under clause (a) of sub-section (1) shall in no case exceed the sum of fifty rupees.`,
  },

  {
    s: "69", t: "Presumption that forest-produce belongs to Government",
    act: "Indian Forest Act 1927",
    kw: ["section 69 ifa","presumption forest produce government","69 ifa","s.69 ifa","forest produce presumed government","burden of proof forest produce"],
    omitted: false,
    bare: `69. Presumption that forest-produce belongs to Government.—When in any proceedings taken under this Act, or in consequence of anything done under this Act, a question arises as to whether any forest-produce is the property of the Government, such produce shall be presumed to be the property of the Government until the contrary is proved.`,
  },

  // ── CHAPTER X — CATTLE-TRESPASS ─────────────────────────────

  {
    s: "70", t: "Cattle-trespass Act, 1871, to apply",
    act: "Indian Forest Act 1927",
    kw: ["section 70 ifa","cattle trespass forest","70 ifa","s.70 ifa","cattle damage forest reserved","cattle impounded forest","pashu vanchhan van"],
    omitted: false,
    bare: `70. Cattle-trespass Act, 1871, to apply.—Cattle trespassing in a reserved forest or in any portion of a protected forest which has been lawfully closed to grazing shall be deemed to be cattle doing damage to a public plantation within the meaning of section 11 of the Cattle-trespass Act, 1871 (1 of 1871), and may be seized and impounded as such by any Forest-officer or Police-officer.`,
  },

  {
    s: "71", t: "Power to alter fines fixed under Cattle-trespass Act",
    act: "Indian Forest Act 1927",
    kw: ["section 71 ifa","alter fines cattle trespass","71 ifa","s.71 ifa","cattle fine forest","elephant fine ten rupees","buffalo camel fine"],
    omitted: false,
    bare: `71. Power to alter fines fixed under that Act.—The State Government may, by notification in the Official Gazette, direct that, in lieu of the fines fixed under section 12 of the Cattle-trespass Act, 1871 (1 of 1871), there shall be levied for each head of cattle impounded under section 70 of this Act such fines as it thinks fit, but not exceeding the following, that is to say:—
For each elephant — ten rupees.
For each buffalo or camel — two rupees.
For each horse, mare, gelding, pony, colt, filly, mule, bull, bullock, cow, or heifer — one rupee.
For each calf, ass, pig, ram, ewe, sheep, lamb, goat or kid — eight annas.`,
  },

  // ── CHAPTER XI — OF FOREST-OFFICERS ────────────────────────

  {
    s: "72", t: "State Government may invest Forest-officers with certain powers",
    act: "Indian Forest Act 1927",
    kw: ["section 72 ifa","forest officer powers","72 ifa","s.72 ifa","civil court power forest officer","search warrant forest","inquiry forest officer","survey demarcate forest officer"],
    omitted: false,
    bare: `72. State Government may invest Forest-officers with certain powers.—(1) The State Government may invest any Forest-officer with all or any of the following powers, that is to say:—
(a) power to enter upon any land and to survey, demarcate and make a map of the same;
(b) the powers of a Civil Court to compel the attendance of witnesses and the production of documents and material objects;
(c) power to issue a search-warrant under the Code of Criminal Procedure, 1898 (5 of 1898); and
(d) power to hold an inquiry into forest-offences, and, in the course of such inquiry, to receive and record evidence.
(2) Any evidence recorded under clause (d) of sub-section (1) shall be admissible in any subsequent trial before a Magistrate, provided that it has been taken in the presence of the accused person.`,
  },

  {
    s: "73", t: "Forest-officers deemed public servants",
    act: "Indian Forest Act 1927",
    kw: ["section 73 ifa","forest officer public servant","73 ifa","s.73 ifa","van adhikari lok sevak","forest staff public servant"],
    omitted: false,
    bare: `73. Forest-officers deemed public servants.—All Forest-officers shall be deemed to be public servants within the meaning of the Indian Penal Code (45 of 1860).`,
  },

  {
    s: "74", t: "Indemnity for acts done in good faith",
    act: "Indian Forest Act 1927",
    kw: ["section 74 ifa","indemnity good faith forest","74 ifa","s.74 ifa","no suit public servant forest","forest officer protection good faith"],
    omitted: false,
    bare: `74. Indemnity for acts done in good faith.—No suit shall lie against any public servant for anything done by him in good faith under this Act.`,
  },

  {
    s: "75", t: "Forest-officers not to trade",
    act: "Indian Forest Act 1927",
    kw: ["section 75 ifa","forest officer trade prohibited","75 ifa","s.75 ifa","forest officer no business timber","van adhikari vyapar nishedh"],
    omitted: false,
    bare: `75. Forest-officers not to trade.—Except with the permission in writing of the State Government, no Forest-officer shall, as principal or agent, trade in timber or other forest-produce, or be or become interested in any lease or any forest or in any contract for working any forest, whether in or outside the territories to which this Act extends.`,
  },

  // ── CHAPTER XII — SUBSIDIARY RULES ─────────────────────────

  {
    s: "76", t: "Additional powers to make rules",
    act: "Indian Forest Act 1927",
    kw: ["section 76 ifa","additional rules forest","76 ifa","s.76 ifa","state government rules forest act","forest officer powers rules","reward informer forest"],
    omitted: false,
    bare: `76. Additional powers to make rules.—The State Government may make rules—
(a) to prescribe and limit the powers and duties of any Forest-officer under this Act;
(b) to regulate the rewards to be paid to officers and informers out of the proceeds of fines and confiscation under this Act;
(c) for the preservation, reproduction and disposal of trees and timber belonging to Government, but grown on lands belonging to or in the occupation of private persons; and
(d) generally, to carry out the provisions of this Act.`,
  },

  {
    s: "77", t: "Penalties for breach of rules",
    act: "Indian Forest Act 1927",
    kw: ["section 77 ifa","penalty breach rules forest","77 ifa","s.77 ifa","one month fine 500 forest rules","forest rule violation penalty"],
    omitted: false,
    bare: `77. Penalties for breach of rules.—Any person contravening any rule under this Act, for the contravention of which no special penalty is provided, shall be punishable with imprisonment for a term which may extend to one month, or fine which may extend to five hundred rupees, or both.`,
  },

  {
    s: "78", t: "Rules when to have force of law",
    act: "Indian Forest Act 1927",
    kw: ["section 78 ifa","rules force of law forest","78 ifa","s.78 ifa","forest rules gazette published","official gazette rules forest"],
    omitted: false,
    bare: `78. Rules when to have force of law.—All rules made by the State Government under this Act shall be published in the Official Gazette, and shall thereupon, so far as they are consistent with this Act, have effect as if enacted therein.`,
  },

  // ── CHAPTER XIII — MISCELLANEOUS ────────────────────────────

  {
    s: "79", t: "Persons bound to assist Forest-officers and Police-officers",
    act: "Indian Forest Act 1927",
    kw: ["section 79 ifa","assist forest officer duty","79 ifa","s.79 ifa","report forest offence duty","extinguish forest fire duty","village person forest duty","one month fine 200 forest duty"],
    omitted: false,
    bare: `79. Persons bound to assist Forest-officers and Police-officers.—(1) Every person who exercises any right in a reserved or protected forest, or who is permitted to take any forest-produce from, or to cut and remove timber or to pasture cattle in, such forest, and every person who is employed by any such person in such forest, and every person in any village contiguous to such forest who is employed by the Government, or who receives emoluments from the Government for services to be performed to the community, shall be bound to furnish without unnecessary delay to the nearest Forest-officer or Police-officer any information he may possess respecting the commission of, or intention to commit, any forest-offence, and shall forthwith take steps, whether so required by any Forest-officer or Police-officer or not,—
(a) to extinguish any forest fire in such forest of which he has knowledge or information;
(b) to prevent by any lawful means in his power any fire in the vicinity of such forest of which he has knowledge or information from spreading to such forest, and shall assist any Forest-officer or Police-officer demanding his aid—
(c) in preventing the commission in such forest of any forest-offence; and
(d) when there is reason to believe that any such offence has been committed in such forest in discovering and arresting the offender.
(2) Any person who, being bound so to do, without lawful excuse (the burden of proving which shall lie upon such person) fails—
(a) to furnish without unnecessary delay to the nearest Forest-officer or Police-officer any information required by sub-section (1);
(b) to take steps as required by sub-section (1), to extinguish any forest fire in a reserved or protected forest;
(c) to prevent, as required by sub-section (1), any fire in the vicinity of such forest from spreading to such forest; or
(d) to assist any Forest-officer or Police-officer demanding his aid in preventing the commission in such forest of any forest-offence, or, when there is reason to believe that any such offence has been committed in such forest, in discovering and arresting the offender;
shall be punishable with imprisonment for a term which may extend to one month, or with fine which may extend to two hundred rupees, or with both.`,
  },

  {
    s: "80", t: "Management of forests the joint property of Government and other persons",
    act: "Indian Forest Act 1927",
    kw: ["section 80 ifa","joint forest government","80 ifa","s.80 ifa","government private joint forest","shared forest management"],
    omitted: false,
    bare: `80. Management of forests the joint property of Government and other persons.—(1) If the Government and any person be jointly interested in any forest or waste-land, or in the whole or any part of the produce thereof, the State Government may either—
(a) undertake the management of such forest, waste-land or produce, accounting to such person for his interest in the same; or
(b) issue such regulations for the management of the forest, waste-land or produce by the person so jointly interested as it deems necessary for the management thereof and the interests of all parties therein.
(2) When the State Government undertakes under clause (a) of sub-section (1) the management of any forest, waste-land or produce, it may, by notification in the Official Gazette, declare that any of the provisions contained in Chapters II and IV shall apply to such forest, waste-land or produce, and thereupon such provisions shall apply accordingly.`,
  },

  {
    s: "81", t: "Failure to perform service for which a share in produce of Government forest is enjoyed",
    act: "Indian Forest Act 1927",
    kw: ["section 81 ifa","failure service forest share","81 ifa","s.81 ifa","share forest produce confiscated service","forest share obligation"],
    omitted: false,
    bare: `81. Failure to perform service for which a share in produce of Government forest is employed.—If any person be entitled to a share in the produce of any forest which is the property of Government or over which the Government has proprietary rights or to any part of the forest-produce of which the Government is entitled upon the condition of duly performing any service connected with such forest, such share shall be liable to confiscation in the event of the fact being established to the satisfaction of the State Government that such service is no longer so performed:
Provided that no such share be confiscated until the person entitled thereto, and the evidence, if any, which he may produce in proof of the due performance of such service, have been heard by an officer duly appointed in that behalf by the State Government.`,
  },

  {
    s: "82", t: "Recovery of money due to Government",
    act: "Indian Forest Act 1927",
    kw: ["section 82 ifa","recovery money government forest","82 ifa","s.82 ifa","arrear land revenue forest","forest dues recovery","van rajaswa vasuli"],
    omitted: false,
    bare: `82. Recovery of money due to Government.—All money payable to the Government under this Act, or under any rule made under this Act, or on account of the price of any forest-produce, or of expenses incurred in the execution of this Act in respect of such produce, may, if not paid when due, be recovered under the law for the time being in force as if it were an arrear of land-revenue.`,
  },

  {
    s: "83", t: "Lien on forest-produce for such money",
    act: "Indian Forest Act 1927",
    kw: ["section 83 ifa","lien forest produce money","83 ifa","s.83 ifa","first charge forest produce","forest produce auction dues","van upaj badhak"],
    omitted: false,
    bare: `83. Lien on forest-produce for such money.—(1) When any such money is payable for or in respect of any forest-produce, the amount thereof shall be deemed to be a first charge on such produce, and such produce may be taken possession of by a Forest-officer until such amount has been paid.
(2) If such amount is not paid when due, the Forest-officer may sell such produce by public auction, and the proceeds of the sale shall be applied first in discharging such amount.
(3) The surplus, if any, if not claimed within two months from the date of the sale by the person entitled thereto, shall be forfeited to Government.`,
  },

  {
    s: "84", t: "Land required under this Act to be deemed needed for public purpose",
    act: "Indian Forest Act 1927",
    kw: ["section 84 ifa","forest land public purpose","84 ifa","s.84 ifa","land acquisition forest public purpose","forest land deemed public purpose"],
    omitted: false,
    bare: `84. Land required under this Act to be deemed to be needed for a public purpose under the Land Acquisition Act, 1894.—Whenever it appears to the State Government that any land is required for any of the purposes of this Act, such land shall be deemed to be needed for a public purpose within the meaning of section 4 of the Land Acquisition Act, 1894 (1 of 1894).`,
  },

  {
    s: "85", t: "Recovery of penalties due under bond",
    act: "Indian Forest Act 1927",
    kw: ["section 85 ifa","recovery penalty bond forest","85 ifa","s.85 ifa","bond breach forest land revenue","forest bond penalty recover"],
    omitted: false,
    bare: `85. Recovery of penalties due under bond.—When any person, in accordance with any provision of this Act, or in compliance with any rule made thereunder, binds himself by any bond or instrument to perform any duty or act, or covenants by any bond or instrument that he, or that he and his servants and agents will abstain from any act, the whole sum mentioned in such bond or instrument as the amount to be paid in case of a breach of the conditions thereof may, notwithstanding anything in section 74 of the Indian Contract Act, 1872 (9 of 1872), be recovered from him in case of such breach as if it were an arrear of land-revenue.`,
  },

  {
    s: "85A", t: "Saving for rights of Central Government",
    act: "Indian Forest Act 1927",
    kw: ["section 85a ifa","central government rights forest","85a ifa","s.85a ifa","state government forest central government rights","central government forest saving"],
    omitted: false,
    bare: `85A. Saving for rights of Central Government.—Nothing in this Act shall authorise a Government of any State to make any order or do anything in relation to any property not vested in that State or otherwise prejudice any rights of the Central Government or the Government of any other State without the consent of the Government concerned.`,
  },

  {
    s: "86", t: "Repeals",
    act: "Indian Forest Act 1927",
    kw: ["section 86 ifa","repeals forest act","86 ifa","s.86 ifa"],
    omitted: true,
    bare: `86. [Repeals].—Rep. by the Repealing and Amending Act, 1948 (2 of 1948), s. 2 and the Schedule.`,
  },

  {
    s: "SCHEDULE", t: "The Schedule — Enactments Repealed",
    act: "Indian Forest Act 1927",
    kw: ["schedule ifa","forest act schedule repealed","ifa schedule","enactments repealed forest act"],
    omitted: true,
    bare: `THE SCHEDULE.—[Enactments repealed.] Rep. by the Repealing and Amending Act, 1948 (2 of 1948), s. 2 and the Schedule.`,
  },

];
