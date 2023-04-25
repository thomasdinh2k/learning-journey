# Custom Invitations as Word Documents
import docx

# TODO: Read guests.txt and store as variable
guest_file = "/Users/thomas/Library/CloudStorage/OneDrive-Personal/Download/automate_online-materials/guests.txt"
with open(guest_file,"r") as file:
    contents = file.read()
    print(contents)
    names = contents.split(sep='\n')
# Open the file
doc = docx.Document('Invitation.docx')
# TODO: Write Docx
for name in names:
    doc.add_paragraph(name).style = 'Name'


doc.save('Invitation.docx')