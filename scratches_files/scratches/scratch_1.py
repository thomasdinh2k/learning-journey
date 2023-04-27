vietnam_city = {
    'Hanoi': 'Nguyen Xuan Phuc',
    'Ho Chi Minh City': 'Vo Thi Anh Xuan',
    'Da Nang': 'Le Trung Chinh',
    'Ba Ria': 'Nguyen Van Tho',
    'Bac Giang': 'Le Anh Duong',
    'Bac Kan': 'Nguyen Huu Duc',
    'Bac Lieu': 'Le Minh Khai',
    'Bac Ninh': 'Nguyen Quang Thanh',
    'Ben Tre': 'Vo Thanh Hao',
    'Binh Dinh': 'Nguyen Phi Long',
    'Binh Duong': 'Tran Thanh Liem',
    'Binh Phuoc': 'Tran Tue Hien',
    'Binh Thuan': 'Nguyen Duc Hoa',
    'Ca Mau': 'Le Van Su',
    'Can Tho': 'Tran Quoc Trung',
    'Cao Bang': 'Pham Van Nghi',
    'Da Lat': 'Tran Van The',
    'Dak Lak': 'Nguyen Quoc Hung',
    'Dak Nong': 'Nguyen Bon',
    'Dien Bien': 'Nguyen Duc Mac',
    'Dong Nai': 'Tran Van Vinh',
    'Dong Thap': 'Pham Thien Nghia',
    'Gia Lai': 'Nguyen Tien Dung',
    'Ha Giang': 'Hoang Minh Duc',
    'Hai Duong': 'Nguyen Van Que',
    'Hai Phong': 'Nguyen Van Tung',
    'Hau Giang': 'Dong Van Thanh',
    'Hoa Binh': 'Bui Van Tinh',
    'Hung Yen': 'Nguyen Van Phong',
    'Khanh Hoa': 'Le Huu Hoang',
    'Kien Giang': 'Do Thanh Binh',
    'Kon Tum': 'Nguyen Duc Chung',
    'Lai Chau': 'Nguyen Van Hung',
    'Lam Dong': 'Pham S',
    'Lang Son': 'Nguyen Cong Truong',
    'Lao Cai': 'Nguyen Ngoc Hinh',
    'Long An': 'Nguyen Van Ut',
    'Nam Dinh': 'Le Hong Son',
    'Nghe An': 'Nguyen Xuan Duong',
    'Ninh Binh': 'Tran Quoc Tuan',
    'Ninh Thuan': 'Tran Quoc Nam',
    'Phu Tho': 'Bui Minh Chau',
    'Phu Yen': 'Nguyen Van Thanh',
    'Quang Binh': 'Tran Cong Thuat',
    'Quang Nam': 'Huynh Khanh Toan',
    'Quang Ngai': 'Le Van Dung',
    'Quang Ninh': 'Nguyen Van Doc',
    'Quang Tri': 'Nguyen Xuan Quang',
    'Soc Trang': 'Nguyen Van Ut',
    'Son La': 'Nguyen Van Thang',
    'Tay Ninh': 'Tran Luu Quang',
    'Thai Binh': 'Nguyen Khac Nghiem',
    'Thai Nguyen': 'Nguyen Luong Hoai',
    'Thanh Hoa': 'Tran Xuan Yen',
    'Thua Thien Hue': 'Nguyen Van Cao',
    'Tien Giang': 'Le Van Huong',
    'Tra Vinh': 'Tran Hoang Kim',
    'Tuyen Quang': 'Pham Minh Huan',
    'Vinh Long': 'Nguyen Van Hanh',
    'Vinh Phuc': 'Nguyen Van Tri',
    'Yen Bai': 'Nguyen Hong Nam'
}

# Create a question

# Get a list of key (Hanoi, HochiMinh, Danang)
city = vietnam_city.keys()
president_name = vietnam_city.values()
pair = vietnam_city.items()
city_list = list(city)
president_name_list = list(president_name)

print(' '*10,'Họ và tên:.........\n')
print(' '*10,'Lớp:...............\n')
print('  '*30,'KIỂM TRA BÀI CŨ\n')

for quesNum in range (150):
    print('Question %s: ' % (quesNum))
    print('What is the president of %s?' % (city_list[quesNum]))
# quesNum = 0
# print('Question %s: '%(quesNum))
# print('What is the president of %s?'%(city_list[1]))
#
# while True:
#     User_answer = input('Type your answer: ')
#
#     if User_answer == president_name_list[1]:
#         print('Correct!')
#         print('The answer is, indeed, %s'%(president_name_list[1]))
#         break
#     else:
#         print('Try again')
#
# print('Exit!')

