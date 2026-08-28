# Digital Forensics Case Study: NotPetya Cyberattack (2017)
## College Presentation Deck Content

---

### **Slide 1: What is NotPetya?**
**Category:** Incident Overview & Classification

* **Initial Outbreak:** NotPetya was a major cyberattack that began on **June 27, 2017**.
* **Initial Appearance:** Initially appeared to be ransomware, closely mimicking the Petya ransomware family.
* **Ransom Demand:** Displayed a red screen demanding a **$300 Bitcoin ransom** payment.
* **True Classification:** However, it was later identified as a **destructive wiper**, not genuine ransomware.
* **Primary Purpose:** Its main purpose was **disruption and destruction** rather than financial profit.

> **Speaker Note / Talking Point:**
> *Introduce the attack date and explain the key distinction: although it looked like ransomware demanding $300, forensic evidence showed the encryption key was erased immediately, proving its real goal was permanent destruction.*

---

### **Slide 2: Where Did It Start and How?**
**Category:** Initial Access & Supply-Chain Vector

* **Ground Zero:** The attack primarily originated in **Ukraine**.
* **Major Ukrainian Targets:** Included government organizations, banks, energy companies, transportation networks, and media outlets.
* **Compromised Infrastructure:** Attackers compromised the update infrastructure of **M.E.Doc**, a widely used Ukrainian accounting software.
* **Malicious Software Update:** A malicious software update containing a backdoor was distributed to legitimate customers.
* **Forensic Significance:** This made NotPetya a major real-world example of a catastrophic **software supply-chain attack**.

> **Speaker Note / Talking Point:**
> *M.E.Doc was mandatory for business tax filings in Ukraine. By breaching the update server, attackers weaponized a trusted software channel to infect thousands of enterprise networks automatically.*

---

### **Slide 3: How Did NotPetya Spread?**
**Category:** Propagation & Lateral Movement

* **EternalBlue:** Exploited a critical vulnerability (CVE-2017-0144) in Windows SMBv1 for remote execution.
* **EternalRomance:** Used another SMB exploitation technique for privilege escalation across machines.
* **Credential Theft:** Scraped active administrator credentials and password hashes directly from infected system memory (LSASS).
* **PsExec:** Used legitimate Windows administration functionality (PsExec) to execute malware remotely.
* **WMI (Windows Management Instrumentation):** Used native WMI commands for stealthy remote execution across domain hosts.
* **Rapid Internal Propagation:** Once inside an organization, NotPetya could spread rapidly across connected systems within minutes.

> **Speaker Note / Talking Point:**
> *Emphasize that NotPetya didn't rely on just one exploit. Even on patched systems, it stole domain credentials from infected RAM and used legitimate Windows admin tools (PsExec and WMI) to log in and infect neighboring machines.*

---

### **Slide 4: What Happened to Infected Systems?**
**Category:** Payload Execution & System Destruction

* **Payload Execution:** The malicious update executed NotPetya on the victim's computer with administrative rights.
* **Reconnaissance & Movement:** The malware attempted to obtain credentials and move laterally through the network.
* **MBR Destruction:** It targeted and corrupted the **Master Boot Record (MBR)** and Master File Table (MFT).
* **System Inoperability:** The system was rendered completely unusable and unbootable.
* **Ransom Note Display:** A ransom message appeared demanding $300 in Bitcoin for file recovery.
* **Irrecoverable State:** However, victims did not have a reliable method to recover their files by paying.
* **Forensic Evidence:** This behavior provided an important clue that NotPetya was designed primarily for destruction.

> **Speaker Note / Talking Point:**
> *Walk through the destruction process: NotPetya triggered a reboot, showed a fake CHKDSK disk repair screen while encrypting file tables, and corrupted sector 0. Reverse engineering confirmed the installation key was randomly generated garbage, making recovery impossible.*

---

### **Slide 5: Major Impact and Digital Forensic Investigation**
**Category:** Global Impact & Digital Forensic Artifacts

* **Major Organizations Affected:**
  * **Maersk:** World's largest shipping container firm; IT infrastructure paralyzed worldwide.
  * **Merck:** Global pharmaceutical leader; vaccine manufacturing disrupted.
  * **FedEx / TNT Express:** European parcel delivery network crippled.
  * **Mondelez:** International food manufacturing halted.
  * **Saint-Gobain:** Global industrial glass and building materials manufacturer impacted.
* **Global Economic Impact:** Disruption to shipping, logistics, and manufacturing led to total global financial losses estimated at **more than $10 billion**.
* **Digital Forensic Investigation Examined:**
  * **Malware Code & Behavior:** Assembly disassembly to analyze wiper routines.
  * **Windows Event Logs:** Traced authentication and process execution events (Event IDs 4688, 7045, 4624).
  * **Network Logs:** Analyzed SMB port 445 connections and network PCAP traces.
  * **M.E.Doc Software Updates:** Reconstructed backdoored updater binaries (`setup.exe`).
  * **Credential Artifacts:** Investigated LSASS memory dump routines.
  * **Disk Images & Memory Dumps:** Analyzed overwritten MBR sectors and volatility memory dumps.

> **Speaker Note / Talking Point:**
> *Highlight the scale: over $10 billion in damage across global supply chains. Forensic examiners proved the wiper behavior by inspecting raw disk sectors, memory dumps, Windows event logs, and M.E.Doc updater logs.*

---

### **Slide 6: Attribution, Conclusion and Lessons Learned**
**Category:** Attribution, Lessons & Final Conclusion

* **Attribution:** In 2018, the United States, United Kingdom, and Australia publicly attributed NotPetya to Russian military intelligence (**GRU / Sandworm**). Russia denied responsibility.
* **Historical Significance:** NotPetya became an important historical example of cyberwarfare and destructive malware.
* **Key Lessons:**
  * Secure and audit the software supply chain.
  * Patch vulnerable systems quickly (especially SMB).
  * Enforce strict network segmentation.
  * Protect administrator credentials and restrict LSASS access.
  * Apply the principle of least-privilege access.
  * Maintain reliable, isolated offline backups.
  * Monitor unusual internal network activity (PsExec / WMI execution).
  * Maintain strong digital forensic readiness.

* **Final Conclusion:**
  NotPetya demonstrated that a cyberattack can begin through a trusted software update, spread rapidly through an organization, and cause enormous global damage. Although it appeared to be ransomware, forensic evidence showed that its real capability and purpose were largely destructive.

> **Speaker Note / Talking Point:**
> *Conclude with the main takeaway: NotPetya redefined cyber threat models. It proved that trusted updates can be backdoored and that digital forensics is critical to distinguish fake ransomware from state-sponsored cyber warfare.*
